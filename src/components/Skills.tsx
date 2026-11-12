import { skillGroups } from '../data/skills'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeading index="02" subtitle="What I work with" title="Skills & Tech" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <AnimatedOnScroll key={group.title} delay={gi * 0.06}>
              <div className="card h-full p-6 transition-colors hover:border-accent/30">
                <div className="mb-4 flex items-center gap-2">
                  <span className={`text-lg ${group.accent}`}>◆</span>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip cursor-default transition-transform hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
