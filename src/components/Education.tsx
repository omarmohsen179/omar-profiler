import { FiAward, FiBookOpen } from 'react-icons/fi'
import { education, certificates } from '../data/education'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-page">
        <SectionHeading index="05" subtitle="Foundations" title="Education & Certificates" />

        <div className="grid gap-6 lg:grid-cols-5">
          <AnimatedOnScroll className="lg:col-span-2" from="left">
            <div className="card h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <FiBookOpen size={20} />
                </span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  {education.award}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">{education.school}</h3>
              <p className="mt-0.5 text-xs text-slate-500">{education.schoolNote}</p>
              <p className="mt-1 text-sm text-slate-400">
                with <span className="text-slate-300">{education.partnerSchool}</span>
              </p>

              <p className="mt-4 text-slate-300">{education.degree}</p>
              <p className="text-sm text-accent-soft">{education.major}</p>
              <p className="mt-2 font-mono text-xs text-slate-500">{education.period}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll className="lg:col-span-3" from="right" delay={0.1}>
            <div className="card h-full p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-accent">
                  <FiAward size={18} />
                </span>
                <h3 className="font-semibold text-white">Certificates</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {certificates.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  )
}
