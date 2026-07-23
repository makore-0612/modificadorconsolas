import glove from '../../assets/glove.png'

export const FRANQUICIAS = [
  { nombre: 'SEGA', slug: 'sega', className: 'border-blue-500 text-blue-400 hover:bg-blue-500/10' },
  { nombre: 'Nintendo', slug: 'nintendo', className: 'border-red-500 text-red-400 hover:bg-red-500/10' },
  { nombre: 'PlayStation', slug: 'playstation', className: 'border-sky-400 text-sky-300 hover:bg-sky-400/10' },
  { nombre: 'Xbox', slug: 'xbox', className: 'border-green-500 text-green-400 hover:bg-green-500/10' },
  { nombre: 'NeoGeo', slug: 'neogeo', className: 'border-amber-400 text-amber-300 hover:bg-amber-400/10' },
  { nombre: 'Arcade', slug: 'arcade', className: 'border-violet-400 text-violet-300 hover:bg-violet-400/10' },
]

function FranquiciaSelector({ seleccionada, onSeleccionar }) {
  return (
    <div className="ffvii-card flex flex-col gap-4 p-4 sm:p-6">
      <div>
        <p className="flex items-center gap-2 font-bold sm:text-xl">
          <img src={glove} alt="" className="h-8 w-12" />
          ¡Conoce mi trabajo!
        </p>
        <p className="mt-1 text-sm text-gray-300">
          Selecciona la franquicia en la que estés interesado:
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:items-center">
        {FRANQUICIAS.map(({ nombre, slug, className }) => (
          <button
            key={slug}
            type="button"
            onClick={() => onSeleccionar(slug)}
            className={`border px-4 py-2 text-center font-bold tracking-wide lg:w-48 ${className} ${seleccionada === slug ? 'bg-white/15' : ''}`}
          >
            {nombre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FranquiciaSelector
