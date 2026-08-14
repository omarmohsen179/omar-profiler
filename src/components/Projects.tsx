import { motion } from 'framer-motion'
import { FiFolder, FiTrendingUp, FiExternalLink, FiSmartphone } from 'react-icons/fi'
import { projects } from '../data/projects'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeading index="04" subtitle="Selected work" title="Projects" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Wrapper = project.link ? motion.a : motion.article
            const linkProps = project.link
              ? {
                  href: project.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `${project.title} — open on the ${project.linkLabel ?? 'web'}`,
                }
              : {}

            return (
              <AnimatedOnScroll key={project.title} delay={i * 0.05}>
                <Wrapper
                  {...linkProps}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`card group flex h-full flex-col p-6 transition-colors hover:border-accent/40 hover:shadow-glow ${
                    project.featured ? 'border-accent/25 bg-accent/[0.03]' : ''
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                      {project.featured ? <FiSmartphone size={20} /> : <FiFolder size={20} />}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      <FiTrendingUp size={12} /> {project.metric}
                    </span>
                  </div>

                  <h3 className="flex items-center gap-1.5 text-lg font-semibold text-white group-hover:text-accent">
                    {project.title}
                    {project.link && (
                      <FiExternalLink
                        size={14}
                        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-slate-500">
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      View on the {project.linkLabel ?? 'web'}
                      <FiExternalLink size={13} />
                    </span>
                  )}
                </Wrapper>
              </AnimatedOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
