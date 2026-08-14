import { contactLinks } from '../data/contact'

const socials = contactLinks.filter((l) => ['LinkedIn', 'GitHub', 'Medium'].includes(l.label))

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-slate-500">
          © 2026 Omar Mohsen · <span className="text-accent">omarmohsen.dev</span>
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-400 transition-colors hover:text-accent"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-slate-600">Built with React · Tailwind · Framer Motion</p>
      </div>
    </footer>
  )
}
