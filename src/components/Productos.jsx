import { motion } from 'motion/react'
import { staggerContainer, fadeUpItem, EASE } from '../lib/motionVariants'
import lamparaColgante from '../assets/lampara-colgante-fiorentina.jpg'
import espejoSol from '../assets/espejo-sol-raffia.jpg'
import lamparaPie from '../assets/lampara-pie-boho.jpg'

const productos = [
  {
    categoria: 'Lámparas',
    nombre: 'Lámpara Colgante Fiorentina',
    descripcion:
      'Tejido artesanal en hilo de yute con flecos naturales. Ambientes cálidos y únicos.',
    imagen: lamparaColgante,
  },
  {
    categoria: 'Espejos',
    nombre: 'Espejo Sol de Raffia',
    descripcion: 'Marco de raffia trenzado a mano. Pieza central perfecta para cualquier pared.',
    imagen: espejoSol,
  },
  {
    categoria: 'Lámparas',
    nombre: 'Lámpara de Pie Boho',
    descripcion: 'Estructura de hierro negro con pantalla tejida en bambú y mimbre natural.',
    imagen: lamparaPie,
  },
]

export default function Productos() {
  return (
    <section id="productos" className="bg-base border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-16">
          <span className="label-uppercase text-gold">Nuestra colección</span>
          <h2 className="font-serif text-3xl md:text-5xl text-text-light mt-4">
            Piezas que hablan por sí solas
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 border border-gold/20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {productos.map((producto, i) => (
            <motion.article
              key={producto.nombre}
              variants={fadeUpItem}
              className={`bg-medium ${i !== 0 ? 'md:border-l border-gold/20' : ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </div>
              <div className="p-8">
                <span className="label-uppercase text-gold">{producto.categoria}</span>
                <h3 className="font-serif text-xl md:text-2xl text-text-light mt-3 mb-3">
                  {producto.nombre}
                </h3>
                <p className="text-text-medium text-sm leading-relaxed mb-6">
                  {producto.descripcion}
                </p>
                <a
                  href="#contacto"
                  className="label-uppercase text-gold-light hover:text-gold inline-flex items-center gap-2"
                >
                  Consultar
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
