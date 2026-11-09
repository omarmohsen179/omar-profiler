/**
 * Cloudflare Worker for omarmohsen.dev.
 *
 * - POST /api/contact  → emails the contact-form submission to SMTP_TO by logging in to
 *   the Private Email mailbox over SMTP (port 465, TLS). Same approach the old
 *   public/contact.php used, but the password lives in a Cloudflare secret (SMTP_PASS).
 * - Everything else    → the static site in ./dist (served by the ASSETS binding).
 */
import { connect } from 'cloudflare:sockets'

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/api/contact') return handleContact(request, env)
    return env.ASSETS.fetch(request)
  },
}

async function handleContact(request, env) {
  if (request.method !== 'POST') {
    return json({ success: false, message: 'Method not allowed.' }, 405)
  }

  let form
  try {
    form = await request.formData()
  } catch {
    return json({ success: false, message: 'Invalid form data.' }, 400)
  }

  // Honeypot — bots fill this hidden field, humans never do.
  if (form.get('botcheck')) return json({ success: true, message: 'Thanks!' })

  const name = String(form.get('name') ?? '').trim()
  const email = String(form.get('email') ?? '').trim()
  const message = String(form.get('message') ?? '').trim()

  const valid =
    name &&
    message &&
    name.length <= 200 &&
    message.length <= 10000 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    !/[\r\n]/.test(name + email) // block header injection

  if (!valid) {
    return json({ success: false, message: 'Please fill in all fields with a valid email.' }, 422)
  }

  const subject = `New message from omarmohsen.dev — ${name}`
  const body =
    'You received a new message from your portfolio contact form.\n\n' +
    `Name:   ${name}\n` +
    `Email:  ${email}\n` +
    '----------------------------------------\n\n' +
    `${message}\n`

  try {
    await smtpSend(env, { replyName: name, replyEmail: email, subject, body })
    return json({ success: true, message: 'Message sent.' })
  } catch (err) {
    console.error('contact SMTP error:', err?.message ?? err)
    return json(
      {
        success: false,
        message: `Could not send right now — please email me directly at ${env.SMTP_TO}.`,
      },
      500,
    )
  }
}

/** UTF-8 safe base64. */
const b64 = (s) => {
  const bytes = new TextEncoder().encode(s)
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  return btoa(bin)
}

/** Minimal SMTP client over implicit TLS: AUTH LOGIN, send one message, QUIT. */
async function smtpSend(env, { replyName, replyEmail, subject, body }) {
  const socket = connect(
    { hostname: env.SMTP_HOST, port: Number(env.SMTP_PORT) },
    { secureTransport: 'on' },
  )
  const writer = socket.writable.getWriter()
  const reader = socket.readable.getReader()
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()
  let buffer = ''

  // Read one full SMTP reply (handles multi-line "250-..." replies).
  const readReply = async () => {
    for (;;) {
      const lines = buffer.split('\r\n')
      for (let i = 0; i < lines.length - 1; i++) {
        if (/^\d{3} /.test(lines[i])) {
          const reply = lines.slice(0, i + 1).join('\n')
          buffer = lines.slice(i + 1).join('\r\n')
          return reply
        }
      }
      const { value, done } = await reader.read()
      if (done) throw new Error('connection closed by server')
      buffer += decoder.decode(value, { stream: true })
    }
  }
  const send = (line) => writer.write(encoder.encode(line + '\r\n'))
  const expect = async (code, what) => {
    const reply = await readReply()
    if (!reply.startsWith(code)) throw new Error(`${what}: ${reply}`)
  }

  try {
    await expect('220', 'greeting')
    await send('EHLO omarmohsen.dev')
    await expect('250', 'EHLO')
    await send('AUTH LOGIN')
    await expect('334', 'AUTH')
    await send(b64(env.SMTP_USER))
    await expect('334', 'AUTH user')
    await send(b64(env.SMTP_PASS))
    await expect('235', 'authentication')
    await send(`MAIL FROM:<${env.SMTP_USER}>`)
    await expect('250', 'MAIL FROM')
    await send(`RCPT TO:<${env.SMTP_TO}>`)
    await expect('250', 'RCPT TO')
    await send('DATA')
    await expect('354', 'DATA')

    const headers = [
      `From: omarmohsen.dev <${env.SMTP_USER}>`,
      `To: <${env.SMTP_TO}>`,
      `Reply-To: =?UTF-8?B?${b64(replyName)}?= <${replyEmail}>`,
      `Subject: =?UTF-8?B?${b64(subject)}?=`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      'Content-Transfer-Encoding: base64',
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${crypto.randomUUID()}@omarmohsen.dev>`,
    ].join('\r\n')
    // Base64 body (76-char lines) — no dot-stuffing or line-length issues.
    const encodedBody = b64(body).replace(/.{1,76}/g, '$&\r\n')

    await send(`${headers}\r\n\r\n${encodedBody}.`)
    await expect('250', 'message')
    await send('QUIT')
  } finally {
    try {
      await socket.close()
    } catch {
      /* ignore */
    }
  }
}
