import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/profile'
import { contactLinks } from '../data/contact'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

const socials = contactLinks.filter((l) => ['LinkedIn', 'GitHub', 'Medium'].includes(l.label))

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Animated aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora-1" />
        <div className="absolute right-1/4 top-1/3 h-[32rem] w-[32rem] translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px] animate-aurora-2" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page pt-24"
      >
        <motion.p variants={item} className="mb-5 inline-flex items-center gap-2 chip font-mono text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1 variants={item} className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </motion.h1>

        <motion.h2 variants={item} className="mt-3 text-2xl font-bold sm:text-4xl">
          <span className="accent-gradient-text">{profile.role}</span>
          <span className="text-slate-500"> — {profile.subRole}</span>
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {profile.tagline} 6 years across fintech, digital banking, and enterprise systems —
          building on <span className="font-mono text-accent-soft">Spring Boot</span>,{' '}
          <span className="font-mono text-accent-soft">Kafka</span>, and{' '}
          <span className="font-mono text-accent-soft">React / Next.js</span>, plus two iOS apps
          shipped with <span className="font-mono text-accent-soft">React Native / Expo</span>.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <FiMapPin className="text-accent" /> {profile.location}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-ink-950 transition-all hover:shadow-glow"
          >
            Get in touch
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
          >
            <FiDownload /> {profile.cvLabel}
          </a>

          <div className="ml-1 flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <s.icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
