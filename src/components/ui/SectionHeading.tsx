import { AnimatedOnScroll } from './AnimatedOnScroll'

type Props = {
  index: string // e.g. "01"
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <AnimatedOnScroll className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span>{index}.</span>
        <span className="h-px w-10 bg-accent/50" />
        <span className="uppercase tracking-widest text-slate-400">{subtitle}</span>
      </div>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </AnimatedOnScroll>
  )
}
