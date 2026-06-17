import Reveal from './Reveal'

const WHATSAPP_URL = 'https://wa.me/5490000000000'
const INSTAGRAM_URL = 'https://www.instagram.com/decor.arte.lr/'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-dark border-b border-gold/20">
      <Reveal
        y={24}
        duration={0.6}
        className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-2 h-2 bg-gold rotate-45" />
          <span className="w-2 h-2 bg-gold rotate-45" />
          <span className="w-2 h-2 bg-gold rotate-45" />
        </div>

        <span className="label-uppercase text-gold">Hablemos</span>
        <h2 className="font-serif text-3xl md:text-5xl text-text-light mt-4 mb-4">
          ¿Querés una pieza única?
        </h2>
        <p className="text-text-medium leading-relaxed mb-10">
          Trabajamos con pedidos personalizados.
          <br />
          Contanos qué tenés en mente y lo hacemos realidad.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-dark px-8 py-4 label-uppercase hover:bg-gold-light transition-colors"
          >
            Escribirnos por WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/60 text-text-light px-8 py-4 label-uppercase hover:border-gold transition-colors"
          >
            Ver Instagram
          </a>
        </div>
      </Reveal>
    </section>
  )
}
