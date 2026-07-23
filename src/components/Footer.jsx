import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons'

function Footer() {
  return (
    <div className="ffvii-card flex flex-col justify-center space-y-3 p-4 sm:p-6">
      <p className="font-bold">¿No encuentras lo que buscas?</p>
      <p className="text-sm text-gray-300">
        Contáctame a través de mis redes para realizar una cotización:
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" aria-label="Instagram" className="border border-gray-300 p-2 hover:bg-white/10">
          <InstagramIcon className="h-5 w-5" />
        </a>
        <a href="#" aria-label="WhatsApp" className="border border-gray-300 p-2 hover:bg-white/10">
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a href="#" aria-label="Facebook" className="border border-gray-300 p-2 hover:bg-white/10">
          <FacebookIcon className="h-5 w-5" />
        </a>
      </div>
      <p className="pt-2 text-xs text-gray-400 sm:text-xs">
        Creada por <a href="https://makore-0612.github.io/zam_portfolio/" className="underline decoration-gray-300">@makore-0612</a> en GitHub. Basado en la interfaz de Final Fantasy VII,
        desarrollado por Square en 1977.
      </p>
    </div>
  )
}

export default Footer
