import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root-relative base so the built assets work when served from the cPanel
// public_html document root (https://omarmohsen.dev/).
export default defineConfig({
  base: '/',
  plugins: [react()],
  // During `npm run dev`, forward the contact-form POST to a local PHP server
  // (start it with `npm run serve:php` in another terminal) so the form works
  // with hot-reload. In production on cPanel, contact.php is served directly.
  server: {
    proxy: {
      '/contact.php': 'http://localhost:8000',
    },
  },
})
