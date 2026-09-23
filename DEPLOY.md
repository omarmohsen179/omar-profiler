# Deploying omarmohsen.dev to Namecheap cPanel

This is a **static** site. `npm run build` produces a `dist/` folder of plain HTML/CSS/JS —
no Node.js runtime is needed on the server. You just upload the files into `public_html`.

## 1. Build

```bash
npm install       # first time only
npm run build     # outputs ./dist
```

To bundle it for upload:

```bash
cd dist && zip -r ../dist.zip . && cd ..
```

## 2. Upload to cPanel

1. Log into cPanel → **File Manager**.
2. Open the **`public_html`** folder (the document root for omarmohsen.dev).
3. If there are placeholder files there (e.g. a default `index.html`, `default.html`), delete them.
4. Click **Upload**, choose `dist.zip`, and upload it.
5. Back in File Manager, select `dist.zip` → **Extract** → extract into `public_html`.
   - Make sure the files land so that **`public_html/index.html`** exists (NOT
     `public_html/dist/index.html`). If they extracted into a `dist/` subfolder, move the
     contents up one level.
6. Delete `dist.zip` when done.

_Alternative:_ upload the **contents of `dist/`** directly via FTP (e.g. FileZilla) into `public_html`.

## 3. Enable HTTPS (fixes the "domain at risk" warning)

Your cPanel currently shows **SSL Certificate: Inactive**. Issue the free certificate:

1. cPanel → search **"SSL/TLS Status"** (or click **Add SSL Certificate**).
2. Select `omarmohsen.dev` (and `www.omarmohsen.dev`) → **Run AutoSSL**.
3. Wait a few minutes for the Let's Encrypt certificate to be issued.
4. (Recommended) cPanel → **Domains** → toggle **Force HTTPS Redirect** on for the domain.

## 4. Verify

- Visit **https://omarmohsen.dev** — the portfolio should load with the padlock icon.
- Click **Download CV** — it should serve `omar-mohsen-cv.pdf`.
- Check on a phone for the responsive layout.

## Contact form (self-hosted — no third-party service)

The "Get in touch" section has a working contact form handled entirely by **`contact.php`**,
which uploads alongside `index.html` and runs on your cPanel PHP. It authenticates against your
mailbox **contact@omarmohsen.dev** over SMTP (**Namecheap Private Email**) and emails each
submission to your Gmail (`omar.alhannash@gmail.com`), with the visitor's address as Reply-To.

**This has been tested end-to-end and confirmed working** — a real test message was delivered
successfully through `mail.privateemail.com`.

Config lives at the top of `public/contact.php`:

| Setting | Value |
|---|---|
| `$SMTP_HOST` | `mail.privateemail.com` (your MX is Namecheap Private Email) |
| `$SMTP_PORT` / `$SMTP_SECURE` | `465` / `ssl` (fallback: `587` / `tls`) |
| `$SMTP_USER` / `$SMTP_PASS` | `contact@omarmohsen.dev` / your password |
| `$RECIPIENT` | `contact@omarmohsen.dev` — read via Private Email webmail (privateemail.com).
  Change to your Gmail if you'd rather receive there. |

`contact.php` is in `dist.zip`, so it lands in `public_html` automatically on upload.

**Security notes**
- `contact.php` runs as PHP, so visitors can't read its source — the password is never exposed
  to the browser.
- It's excluded from git via `.gitignore` (`public/contact.php`) so the password isn't committed.
- Since the password was shared in chat, consider rotating it in Private Email and updating the file.

## ⚠️ Point your domain at the hosting first (DNS)

Right now `omarmohsen.dev` is **parked** — DNS resolves to `162.255.119.139`
(Namecheap parking page), not your cPanel server `198.54.125.252`. Until you fix this, the
site won't load no matter what you upload.

Fix: Namecheap dashboard → **Domain List → Manage → Advanced DNS** (or your DNS host):
- Set the **A record** for `@` (host) to **`198.54.125.252`**
- Set `www` to a **CNAME** → `omarmohsen.dev` (or an A record to the same IP)
- Leave the **MX records** (`mx1/mx2.privateemail.com`) untouched — those run your email.

DNS changes take a few minutes to a few hours to propagate. After it resolves to
`198.54.125.252`, run AutoSSL (below) and the site will be live over HTTPS.

## Testing the contact form locally

The form needs PHP to run. `npm run dev` / `npm run preview` (Vite) have **no PHP**, so the
form shows "Couldn't reach the server" there — that's expected, not a bug. Two ways to test:

- **Simplest — one command, one URL:**
  ```bash
  npm run serve:php      # builds + serves at http://localhost:8000 with PHP
  ```
  Open **http://localhost:8000** — the whole site and the working form run there.

- **With hot-reload (two terminals):** run `npm run serve:php` in one terminal (PHP backend
  on :8000) and `npm run dev` in another. Open **http://localhost:5173** — Vite proxies the
  form's `/contact.php` request to the PHP server (see `vite.config.ts`), so the form works
  while you edit with live reload.

On cPanel there's nothing to configure — PHP runs the form automatically.

## Updating the site later

Edit the content in `src/data/*.ts` (or components), then repeat steps 1–2. Because the
built asset filenames are content-hashed, browsers pick up changes automatically.


## Troubleshooting: "Download CV" saves an .html file

**Symptom.** Clicking *Download CV* saves a small `.html` file instead of the PDF.

**Cause.** The server returns **403 Forbidden** for the PDF and sends an HTML error page as
the response body. The `download` attribute on the link makes the browser save whatever came
back — so you get the error page saved under a `.pdf`/`.html` name. Confirm with:

```bash
curl -sI https://omarmohsen.dev/omar-mohsen-cv.pdf | head -1
```

A `403` means the file exists but Apache cannot read it. This happens when the file lands in
`public_html` with mode **600** (`-rw-------`) instead of **644** (`-rw-r--r--`). Files copied
from macOS or downloaded from mail/chat often carry 600.

**Fix — cPanel File Manager**

1. Open `public_html`, select `omar-mohsen-cv.pdf`, `omar-mohsen-cv-eu.pdf`, `favicon.svg`.
2. Right-click → **Change Permissions**.
3. Set **0644** (owner read+write, group read, world read). Directories need **0755**.

Re-extracting the current `dist.zip` also fixes it: the archive now stores 644 on every file,
and those permissions are applied on Extract.

**Keep it fixed.** `scripts/build_cv.py` chmods the generated PDFs to 644, and the build/zip
steps above preserve that. Verify any deploy with:

```bash
for f in index.html favicon.svg contact.php omar-mohsen-cv.pdf; do \
  echo "$f $(curl -so /dev/null -w '%{http_code}' https://omarmohsen.dev/$f)"; done
```

All four should report `200`.

## Regenerating the CV PDF

The CV is generated from source, not hand-edited:

```bash
python3 scripts/build_cv.py
```

Edit the text in `scripts/cv_content.py` (supports `**bold**`), then rerun. It writes
`Omar_Mohsen_CV_EU.pdf` and both `public/` copies at mode 644. Bump `cvUrl`'s `?v=` in
`src/data/profile.ts` so browsers and cPanel don't serve a cached copy, then `npm run build`.
