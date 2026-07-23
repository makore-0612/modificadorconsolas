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
                src={placeholder}
                alt=""
                className="h-20 w-20 shrink-0 border border-gray-300 object-cover"
              />
              <div>
                <p className="font-bold">{consola.nombre}</p>
                <p className="text-sm text-gray-300">{consola.descripcion}</p>
                <a
                  href={`#/franquicia/${franquicia}/consola/${consola.slug}`}
                  className="mt-2 inline-block font-bold text-cyan-300 hover:underline"
                >
                  Ver modificaciones ↗
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ConsolasList
