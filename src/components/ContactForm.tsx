import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi'
import { CONTACT_ENDPOINT } from '../data/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('submitting')
    setError('')

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(json.message || 'Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setStatus('error')
      setError('Couldn’t reach the server. Please try again or email me directly at contact@omarmohsen.dev.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6">
      {/* Honeypot — hidden field bots tend to fill */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input
            name="name"
            required
            placeholder="Jane Doe"
            className={inputClass}
            disabled={status === 'submitting'}
          />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
            disabled={status === 'submitting'}
          />
        </Field>
      </div>

      <Field label="Message">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, role, or team…"
          className={`${inputClass} resize-y`}
          disabled={status === 'submitting'}
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-ink-950 transition-all hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <FiLoader className="animate-spin" /> Sending…
          </>
        ) : status === 'success' ? (
          <>
            <FiCheckCircle /> Sent
          </>
        ) : (
          <>
            <FiSend className="transition-transform group-hover:translate-x-0.5" /> Send message
          </>
        )}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <Notice tone="success" icon={<FiCheckCircle />}>
            Thanks — your message is on its way. I&rsquo;ll get back to you shortly.
          </Notice>
        )}
        {status === 'error' && (
          <Notice tone="error" icon={<FiAlertCircle />}>
            {error}
          </Notice>
        )}
      </AnimatePresence>
    </form>
  )
}

const inputClass =
  'w-full rounded-lg border border-white/10 bg-ink-950/60 px-4 py-2.5 text-slate-200 placeholder:text-slate-600 outline-none transition-colors focus:border-accent/60 focus:ring-1 focus:ring-accent/40'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wide text-slate-400">{label}</span>
      {children}
    </label>
  )
}

function Notice({
  tone,
  icon,
  children,
}: {
  tone: 'success' | 'error'
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-sm ${
        tone === 'success'
          ? 'border-accent/30 bg-accent/10 text-accent-soft'
          : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
      }`}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <span>{children}</span>
    </motion.div>
  )
}
