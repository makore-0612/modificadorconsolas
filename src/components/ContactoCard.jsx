import { abrirCorreo } from '../utils/contacto'

export function ContactarButton() {
  return (
    <button
      type="button"
      onClick={abrirCorreo}
      className="ffvii-card flex h-full w-full items-center justify-center p-6 text-center font-bold hover:bg-white/10"
    >
      Contactar
    </button>
  )
}

export function MagicSummonBox() {
  return (
    <div className="ffvii-card flex h-full flex-col justify-center gap-1 p-4">
      <p>Magic</p>
      <p>Summon</p>
      <p>Enemy-Skill</p>
    </div>
  )
}
