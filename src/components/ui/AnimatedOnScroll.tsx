import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  /** direction the element travels in from */
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  as?: 'div' | 'li' | 'section'
}

const offset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Fade + slide a block into view the first time it scrolls onscreen.
 * Motion is automatically neutralised for users with prefers-reduced-motion
 * because Framer Motion respects the OS setting via useReducedMotion internally
 * when transforms are used, and the CSS media query above zeroes durations.
 */
export function AnimatedOnScroll({
  children,
  className,
  delay = 0,
  from = 'up',
  as = 'div',
}: Props) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
