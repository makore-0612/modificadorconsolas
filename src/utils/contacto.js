const EMAIL_USUARIO = ['d', 'e', 'l', 'r', 'a', 'z', 'o', '4', '7', '7', '6']
const EMAIL_DOMINIO = ['g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm']

export function getEmail() {
  return `${EMAIL_USUARIO.join('')}@${EMAIL_DOMINIO.join('')}`
}

export function abrirCorreo() {
  window.location.href = `mailto:${getEmail()}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/elmodificador'
export const FACEBOOK_URL = 'https://www.facebook.com/atomboy42'

// WhatsApp omite el "1" de móvil que usan los números de MX al marcar desde el
// extranjero; wa.me lo rechaza si se incluye.
export const WHATSAPP_URL = 'https://wa.me/525527212361'
