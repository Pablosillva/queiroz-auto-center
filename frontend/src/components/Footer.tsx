import { Link } from 'react-router-dom'
import { branches } from '../data/branches'

export function Footer() {
  return (
    <footer className="bg-[#060F3A] text-[#AEB4CE] px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-white font-bold text-lg mb-3">
            QUEIROZ <span className="text-[#E5231A]">AUTO CENTER</span>
          </p>
          <p className="text-sm max-w-xs">
            Oficina mecânica multimarcas — alinhamento, injeção eletrônica, freios,
            suspensão e revisão completa.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold mb-3">Nossas unidades</h4>
          {branches.map((branch) => (
            <Link key={branch.id} to={`/unidades/${branch.id}`} className="block text-sm py-1 hover:text-white">
              {branch.name}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="text-white text-sm font-bold mb-3">Oficina</h4>
          <a href="#processo" className="block text-sm py-1 hover:text-white">Como funciona</a>
          <a href="#servicos" className="block text-sm py-1 hover:text-white">Serviços</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs">
        © 2026 Queiroz Auto Center. Todos os direitos reservados.
      </div>
    </footer>
  )
}