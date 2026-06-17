const WHATSAPP_URL = 'https://wa.me/5490000000000'
const INSTAGRAM_URL = 'https://instagram.com/decor.arte'

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-serif text-lg text-text-light tracking-wide">
          DECOR<span className="text-gold">.</span>ARTE
        </span>

        <p className="label-uppercase text-text-medium text-center">
          © 2025 DecorArte — Lámparas, espejos y más
        </p>

        <div className="flex gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/40 px-4 py-2 label-uppercase text-text-medium hover:text-gold-light hover:border-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/40 px-4 py-2 label-uppercase text-text-medium hover:text-gold-light hover:border-gold transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
