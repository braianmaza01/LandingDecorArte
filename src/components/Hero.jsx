import LampIllustration from './icons/LampIllustration'
import SunMirrorIllustration from './icons/SunMirrorIllustration'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="bg-base border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center py-20 md:py-28">
        <Reveal y={28} duration={0.7}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="label-uppercase text-gold">Artesanías para tu hogar</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] text-text-light mb-6">
            Tu espacio,
            <br />
            <span className="italic text-gold-light">tu identidad.</span>
          </h1>

          <p className="text-text-medium text-base md:text-lg leading-relaxed max-w-md mb-10">
            Lámparas tejidas a mano y espejos artesanales que transforman cualquier ambiente en
            un rincón con alma propia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#productos"
              className="bg-gold text-dark px-8 py-4 label-uppercase hover:bg-gold-light transition-colors"
            >
              Ver colección
            </a>
            <a
              href="#nosotros"
              className="border border-gold/60 text-text-light px-8 py-4 label-uppercase hover:border-gold transition-colors"
            >
              Conocer más
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          y={20}
          className="relative hidden md:flex flex-col items-center justify-center gap-10 text-gold/70"
        >
          <LampIllustration className="w-72 h-auto" />
          <SunMirrorIllustration className="w-40 h-auto" />
        </Reveal>
      </div>
    </section>
  )
}
