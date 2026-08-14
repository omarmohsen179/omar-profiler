import { stats } from '../data/profile'
import { useCountUp } from './ui/useCountUp'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        <span ref={ref}>{current}</span>
        <span className="accent-gradient-text">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-slate-400">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="container-page">
      <AnimatedOnScroll className="card grid grid-cols-2 gap-8 px-6 py-10 shadow-glow/50 sm:grid-cols-4 sm:px-10">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </AnimatedOnScroll>
    </section>
  )
}
