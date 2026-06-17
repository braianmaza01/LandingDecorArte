import { motion } from 'motion/react'
import { staggerContainer, fadeUpItem, EASE } from '../lib/motionVariants'

const testimonios = [
  {
    texto:
      'La lámpara que compré transformó completamente mi comedor. Es una obra de arte que además ilumina perfecto.',
    autor: 'Valentina M.',
    ciudad: 'Buenos Aires',
  },
  {
    texto:
      'El espejo de raffia es lo más lindo que tengo en mi living. Todos me preguntan dónde lo compré.',
    autor: 'Luciana P.',
    ciudad: 'Córdoba',
  },
  {
    texto: 'Atención personalizada y calidad increíble. Cada detalle está pensado. 100% recomendable.',
    autor: 'Romina G.',
    ciudad: 'Mendoza',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-medium border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-16">
          <span className="label-uppercase text-gold">Clientes felices</span>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light mt-4">
            Lo que dicen de nosotros
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonios.map((t) => (
            <motion.figure
              key={t.autor}
              variants={fadeUpItem}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="border border-gold/20 p-8 bg-medium2"
            >
              <span className="font-serif text-4xl text-gold leading-none">&ldquo;</span>
              <div className="text-gold-light text-sm mb-4 tracking-widest">★★★★★</div>
              <blockquote className="font-serif italic text-text-light leading-relaxed mb-6">
                {t.texto}
              </blockquote>
              <figcaption className="label-uppercase text-text-medium">
                — {t.autor}, {t.ciudad}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
