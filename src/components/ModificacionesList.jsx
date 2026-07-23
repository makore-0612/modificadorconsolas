import placeholder from '../../assets/placeholder.png'

const PLACEHOLDER_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  nombre: 'Nombre de la modificación',
  descripcion: 'Descripción de la modificación',
  precio: '$3,141.63 MXN',
}))

function ModificacionesList() {
  return (
    <div className="ffvii-card flex min-h-0 flex-col p-4 sm:p-6 lg:h-0 lg:min-h-full">
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-1 lg:min-h-0">
        {PLACEHOLDER_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b border-gray-300/40 pb-4 last:border-b-0 last:pb-0"
          >
            <img
              src={placeholder}
              alt=""
              className="h-50 w-50 shrink-0 border border-gray-300 object-cover"
            />
            <div>
              <p className="font-bold sm:text-xl">{item.nombre}</p>
              <p className="text-sm text-gray-300">{item.descripcion}</p>
              <p className="mt-2 font-bold text-cyan-300 sm:text-lg">{item.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModificacionesList
