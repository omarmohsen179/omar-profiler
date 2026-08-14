import { motion } from 'framer-motion'
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
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.03 }}
                      whileHover={{ y: -2 }}
                      className="chip cursor-default hover:border-accent/50 hover:text-accent"
                    >
                      {skill}
                    </motion.span>
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
