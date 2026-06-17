import { motion } from 'motion/react'
import { EASE } from '../lib/motionVariants'

export default function Reveal({
  children,
  as: Component = motion.div,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  ...rest
}) {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  )
}
