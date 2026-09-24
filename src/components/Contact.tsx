import { FiDownload } from 'react-icons/fi'
import { contactLinks } from '../data/contact'
import { profile } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading index="06" subtitle="Let's talk" title="Get in touch" />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: pitch + working contact form */}
          <AnimatedOnScroll from="left">
            <p className="text-lg leading-relaxed text-slate-300">
              I'm open to senior roles (
              <span className="text-accent">EU relocation or remote</span>) and selected freelance
              projects. Whether you need a backend engineer for scalable microservices or a
              full-stack developer to ship product, drop me a message below.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </AnimatedOnScroll>

          {/* Right: direct channels + CV */}
          <AnimatedOnScroll from="right" delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const external = link.href.startsWith('http')
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="card group flex items-center gap-3 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                      <link.icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wide text-slate-500">{link.label}</div>
                      <div className="break-all text-sm text-slate-200 group-hover:text-accent">
                        {link.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            <a
              href={profile.cvUrl}
              download={profile.cvFileName}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
            >
              <FiDownload /> Download CV
            </a>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  )
}
