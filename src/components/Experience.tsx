import { experiences } from '../data/experience'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeading index="03" subtitle="Where I've worked" title="Experience" />

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-2.5" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedOnScroll key={exp.company + exp.period} from="left" delay={i * 0.05}>
                <div className="relative pl-10 sm:pl-12">
                  {/* node */}
                  <span className="absolute left-0 top-1.5 grid h-5 w-5 place-items-center rounded-full border border-accent/50 bg-ink-950">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <div className="card p-6 transition-colors hover:border-accent/30">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role} <span className="text-accent">· {exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-400">{exp.location}</div>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span key={s} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-accent-soft">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
