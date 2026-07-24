import { Link } from 'react-router-dom'
import placeholder from '../../assets/placeholder.png'

function ConsolasList({ franquicia, consolas }) {
  return (
    <div className="ffvii-card flex min-h-0 flex-col p-4 sm:p-6 lg:h-0 lg:min-h-full">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-1 lg:min-h-0">
        {consolas.length === 0 ? (
          <p className="text-sm text-gray-300">
            Aún no hay consolas registradas para esta franquicia.
          </p>
        ) : (
          consolas.map((consola) => (
            <div
              key={consola.slug}
              className="flex gap-4 border-b border-gray-300/40 pb-4 last:border-b-0 last:pb-0"
            >
              <img
                src={`${import.meta.env.BASE_URL}${consola.imagen}`}
                onError={(e) => { e.currentTarget.src = placeholder }}
                alt=""
                className="h-30 w-30 shrink-0 border border-gray-300 object-cover"
              />
              <div>
                <p className="font-bold sm:text-xl">{consola.nombre}</p>
                <p className="text-sm text-gray-300">{consola.descripcion}</p>
                <Link
                  to={`/franquicia/${franquicia}/consola/${consola.slug}`}
                  className="mt-2 inline-block font-bold text-cyan-300 hover:underline"
                >
                  Ver modificaciones ↗
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ConsolasList
