import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { EASE } from '../lib/motionVariants'

const links = [
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark/95 border-b border-gold/20">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-wide text-text-light">
          DECOR<span className="text-gold">.</span>ARTE
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label-uppercase text-text-medium hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-block border border-gold px-6 py-3 label-uppercase text-text-light hover:bg-gold hover:text-dark transition-colors"
        >
          Consultar
        </a>

        <button
          className="md:hidden text-text-light"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-px bg-gold mb-1.5" />
          <span className="block w-6 h-px bg-gold mb-1.5" />
          <span className="block w-6 h-px bg-gold" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="md:hidden border-t border-gold/20 bg-dark px-6 py-6 flex flex-col gap-5"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="label-uppercase text-text-medium hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="border border-gold px-6 py-3 label-uppercase text-text-light text-center"
            >
              Consultar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
