import { Link, useParams } from 'react-router-dom'
import ModificacionesList from '../components/ModificacionesList'
import FooterContacto from '../components/FooterContacto'

function ConsolaPage({ datos }) {
  const { fSlug, cSlug } = useParams()
  const consolas = datos?.[fSlug] ?? []
  const consola = consolas.find((c) => c.slug === cSlug)

  if (!datos) {
    return null
  }

  if (!consola) {
    return (
      <div className="relative mx-auto max-w-[1400px] p-4 lg:py-6">
        <div className="ffvii-card space-y-3 p-4 text-center sm:p-6">
          <p className="font-bold">No se encontró esa consola.</p>
          <Link to="/" className="inline-block text-cyan-300 hover:underline">
            ←General Store
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto max-w-[1400px] p-4 lg:py-6">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto]">
          <div className="ffvii-card flex items-center p-4 sm:p-6">
            <p className="font-bold sm:text-xl">¿Qué te gustaría adquirir?</p>
          </div>
          <Link
            to="/"
            className="ffvii-card flex items-center justify-center p-4 text-center font-bold hover:bg-white/10 sm:p-6"
          >
            ←General Store
          </Link>
        </div>

        <ModificacionesList modificaciones={consola.modificaciones} />

        <FooterContacto />
      </div>
    </div>
  )
}

export default ConsolaPage
