import { Link } from 'react-router-dom'
import { branches } from '../data/branches'

export function BranchSelector() {
  return (
    <main className="min-h-screen bg-[#060F3A] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
          Escolha sua unidade
        </h1>
        <p className="text-[#AEB4CE] mb-12">
          Selecione a unidade mais próxima de você para continuar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              to={`/unidades/${branch.id}`}
              className="group relative h-64 rounded-lg overflow-hidden block"
              style={{
                backgroundImage: `url(${branch.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{branch.name}</h2>
                <p className="text-white/80 text-sm mt-1">{branch.city}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}