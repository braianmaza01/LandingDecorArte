import { motion } from 'motion/react'
import { fadeUpItem } from '../lib/motionVariants'

const items = [
  'Hecho a mano',
  'Materiales naturales',
  'Envío a todo el país',
  'Piezas únicas',
]

export default function InfoStrip() {
  return (
    <div className="bg-medium border-b border-gold/20">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap gap-x-12 gap-y-4 justify-center md:justify-between"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item) => (
          <motion.div key={item} variants={fadeUpItem} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-gold rotate-45 shrink-0" />
            <span className="label-uppercase text-text-medium">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
