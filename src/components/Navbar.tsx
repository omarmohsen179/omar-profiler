import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-lg' : ''
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-mono text-lg font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 text-accent transition-colors group-hover:bg-accent/10">
            OM
          </span>
          <span className="hidden sm:inline">omarmohsen<span className="text-accent">.dev</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                active === link.id ? 'text-accent' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="font-mono text-xs text-accent/70">0{i + 1}.</span> {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-accent/50 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/10 hover:shadow-glow"
          >
            <FiDownload /> Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-lg md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.cvUrl}
                download={profile.cvFileName}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-accent/50 px-4 py-3 font-medium text-accent"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
