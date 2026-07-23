import { GmailIcon, InstagramIcon, WhatsAppIcon } from './icons'
import { INSTAGRAM_URL, WHATSAPP_URL, abrirCorreo } from '../utils/contacto'
import glove from '../../assets/glove.png'

function FooterContacto() {
  return (
    <div className="ffvii-card flex flex-col items-center space-y-3 p-4 text-center sm:p-6">
      <p className="flex items-center gap-2 font-bold sm:text-xl">
        <img src={glove} alt="" className="h-8 w-12" /> Envíame un mensaje para realizar lo que tienes en mente
      </p>
      <p className="text-sm text-gray-300">
        Contáctame a través de mis redes para realizar una cotización:
      </p>
      <div className="flex justify-center gap-4">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="border border-gray-300 p-2 hover:bg-white/10"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="border border-gray-300 p-2 hover:bg-white/10"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={abrirCorreo}
          aria-label="Correo"
          className="border border-gray-300 p-2 hover:bg-white/10"
        >
          <GmailIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="pt-2 text-xs text-gray-400">
        Creada por <a href="https://makore-0612.github.io/zam_portfolio/" className="underline decoration-gray-300">@makore-0612</a> en GitHub. Basado en la interfaz de Final Fantasy VII,
        desarrollado por Square en 1977.
      </p>
    </div>
  )
}

export default FooterContacto
