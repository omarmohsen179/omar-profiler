import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  /** direction the element travels in from */
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  as?: 'div' | 'li' | 'section'
}

/**
 * Fade + slide a block into view the first time it scrolls onscreen.
 *
 * Content is rendered VISIBLE in the prerendered HTML, so the page paints
 * instantly without waiting for JavaScript. After hydration, only blocks that
 * are still below the fold get hidden (via a data attribute) and are revealed
 * with a CSS transition when they scroll in. No animation library needed.
 */
export function AnimatedOnScroll({
  children,
  className,
  delay = 0,
  from = 'up',
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Already on screen (or scrolled past) — leave it visible.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    el.setAttribute('data-reveal-hidden', '')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.removeAttribute('data-reveal-hidden')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -80px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={className}
      data-reveal={from}
      style={delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
