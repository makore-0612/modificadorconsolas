import { useState } from 'react'
import PerfilCard from '../components/PerfilCard'
import { ContactarButton, MagicSummonBox } from '../components/ContactoCard'
import Descripcion from '../components/Descripcion'
import FranquiciaSelector, { FRANQUICIAS } from '../components/FranquiciaSelector'
import ConsolasList from '../components/ConsolasList'
import Footer from '../components/Footer'

function HomePage({ datos }) {
  const [seleccionada, setSeleccionada] = useState(FRANQUICIAS[0].slug)

  const consolas = datos?.[seleccionada] ?? []

  return (
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
  )
}

export default HomePage
