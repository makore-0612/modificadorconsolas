import { useEffect, useState } from 'react'

// Fondo plano si el dispositivo es táctil (celular/tablet) o si el usuario pidió reducir movimiento
const CONSULTA = '(hover: none) and (pointer: coarse), (prefers-reduced-motion: reduce)'

function useFondoAnimado() {
  const [animado, setAnimado] = useState(() => !window.matchMedia(CONSULTA).matches)

  useEffect(() => {
    const media = window.matchMedia(CONSULTA)
    const actualizar = () => setAnimado(!media.matches)
    media.addEventListener('change', actualizar)
    return () => media.removeEventListener('change', actualizar)
  }, [])

  return animado
}

export default useFondoAnimado
