import LampIllustration from './icons/LampIllustration'
import Reveal from './Reveal'

const stats = [
  { value: '+200', label: 'Piezas vendidas' },
  { value: '100%', label: 'Hecho a mano' },
  { value: '+3', label: 'Años de experiencia' },
  { value: '∞', label: 'Diseños únicos' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-base border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
        <Reveal
          y={24}
          duration={0.65}
          className="relative border border-gold/30 aspect-square flex items-center justify-center"
        >
          <span className="absolute top-4 left-4 w-6 h-6 border-l border-t border-gold" />
          <span className="absolute top-4 right-4 w-6 h-6 border-r border-t border-gold" />
          <span className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-gold" />
          <span className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-gold" />

          <div className="flex flex-col items-center gap-4 text-gold/70">
            <LampIllustration className="w-40 h-auto" />
            <span className="font-serif italic text-text-light text-lg">hecho con amor</span>
            <span className="label-uppercase text-text-medium">desde La Rioja, Argentina</span>
          </div>
        </Reveal>

        <Reveal y={24} duration={0.65} delay={0.1}>
          <span className="label-uppercase text-gold">Nuestra historia</span>
          <h2 className="font-serif text-3xl md:text-4xl text-text-light mt-4 mb-8 leading-tight">
            Artesanía con identidad y corazón
          </h2>

          <p className="text-text-medium leading-relaxed mb-6">
            Cada pieza que hacemos lleva horas de trabajo, elección cuidadosa de materiales
            naturales y el amor de quienes la construyen. No somos una fábrica — somos artesanos
            que creen que un buen ambiente empieza por los detalles.
          </p>
          <p className="text-text-medium leading-relaxed mb-10">
            Trabajamos con fibras naturales, hierro forjado y técnicas transmitidas de generación
            en generación para crear objetos que duran y que tienen alma.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-gold/20 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-gold-light">{stat.value}</p>
                <p className="label-uppercase text-text-medium mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
