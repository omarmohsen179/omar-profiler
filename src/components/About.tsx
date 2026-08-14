import { FiGlobe, FiMapPin, FiBriefcase } from 'react-icons/fi'
import { profile } from '../data/profile'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading index="01" subtitle="Who I am" title="About" />

        <div className="grid gap-10 lg:grid-cols-5">
          <AnimatedOnScroll className="lg:col-span-3" from="left">
            <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
            <p className="mt-5 leading-relaxed text-slate-400">
              I work best in cross-functional Agile teams, and I care about the fundamentals: clean
              APIs, reliable integrations, solid test coverage, and systems that stay maintainable as
              they scale. I've delivered for companies across Germany, Saudi Arabia, and Australia —
              fully remote. Outside client work I ship my own products: two iOS apps built with
              React Native and Expo are live on the App Store.
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll className="lg:col-span-2" from="right" delay={0.1}>
            <div className="card space-y-5 p-6">
              <InfoRow icon={<FiMapPin />} label="Based in" value={profile.location} />
              <InfoRow icon={<FiBriefcase />} label="Status" value="Open to remote & freelance" />
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                  <span className="text-accent">
                    <FiGlobe />
                  </span>
                  Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((l) => (
                    <span key={l.name} className="chip">
                      {l.name}
                      <span className="text-accent-soft">· {l.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
        <div className="text-slate-200">{value}</div>
      </div>
    </div>
  )
}
