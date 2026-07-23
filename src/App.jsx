import { useEffect, useState } from 'react'
import Silk from './components/Silk'
import PerfilCard from './components/PerfilCard'
import { ContactarButton, MagicSummonBox } from './components/ContactoCard'
import Descripcion from './components/Descripcion'
import FranquiciaSelector, { FRANQUICIAS } from './components/FranquiciaSelector'
import ConsolasList from './components/ConsolasList'
import Footer from './components/Footer'

function App() {
  const [datos, setDatos] = useState(null)
  const [seleccionada, setSeleccionada] = useState(FRANQUICIAS[0].slug)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}modificaciones.json`)
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error('No se pudo cargar modificaciones.json', err))
  }, [])

  const consolas = datos?.[seleccionada] ?? []

  return (
    <div className="relative min-h-svh text-white font-mono">
      <div className="fixed inset-0 -z-10">
        <Silk speed={5} scale={0.6} color="#0000a3" noiseIntensity={5} rotation={42} />
      </div>

      <div className="relative mx-auto max-w-[1400px] p-4 lg:py-6">
        <div className="ffvii-grid">
          <div className="area-perfil">
            <PerfilCard />
          </div>
          <div className="area-contactar">
            <ContactarButton />
          </div>
          <div className="area-magic">
            <MagicSummonBox />
          </div>
          <div className="area-desc">
            <Descripcion />
          </div>
          <div className="area-franquicia">
            <FranquiciaSelector seleccionada={seleccionada} onSeleccionar={setSeleccionada} />
          </div>
          <div className="area-mods">
            <ConsolasList franquicia={seleccionada} consolas={consolas} />
          </div>
          <div className="area-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
