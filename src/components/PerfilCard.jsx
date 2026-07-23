import placeholder from '../../assets/placeholder.png'

function PerfilCard() {
  return (
    <div className="ffvii-card flex h-full items-center gap-4 p-4 sm:gap-6 sm:p-6">
      <img
        src={placeholder}
        alt="Foto de perfil"
        className="h-20 w-20 shrink-0 border border-gray-300 object-cover sm:h-35 sm:w-35"
      />
      <div className="space-y-1">
        <p className="text-lg font-bold sm:text-3xl">Javier Zamora</p>
        <p>
          <span className="text-cyan-300 sm:text-lg">XP</span>{' '}
          <span className="sm:text-lg">15 años</span>
        </p>
        <p>
          <span className="text-cyan-300 sm:text-lg">HP</span>{' '}
          <span className="underline decoration-cyan-300 sm:text-lg">2345/2345</span>
        </p>
        <p>
          <span className="text-cyan-300 sm:text-lg">MP</span>{' '}
          <span className="underline decoration-cyan-300 sm:text-lg">559/559</span>
        </p>
      </div>
    </div>
  )
}

export default PerfilCard
