import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { Branch } from '../types'

export function Header() {
  const { data: branches } = useFetch<Branch[]>(`${import.meta.env.VITE_API_URL}/branches`)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBranchMenuOpen, setIsBranchMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060F3A]/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo-queiroz.webp" alt="Queiroz Auto Center" className="h-10 w-auto" />
          <span className="text-white font-bold text-lg">
            QUEIROZ <span className="text-[#E5231A]">AUTO CENTER</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="#servicos" className="hover:text-[#E5231A] transition-colors">Serviços</a>
          <a href="#processo" className="hover:text-[#E5231A] transition-colors">Como funciona</a>

          <div className="relative">
            <button
              onClick={() => setIsBranchMenuOpen(!isBranchMenuOpen)}
              className="hover:text-[#E5231A] transition-colors flex items-center gap-1"
            >
              Unidades <span className="text-xs">▾</span>
            </button>

            {isBranchMenuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg overflow-hidden min-w-[200px]">
                {branches?.map((branch) => (
                  <Link
                    key={branch.id}
                    to={`/unidades/${branch.id}`}
                    onClick={() => setIsBranchMenuOpen(false)}
                    className="block px-4 py-3 text-[#0A0E27] text-sm hover:bg-gray-100"
                  >
                    {branch.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#blog" className="hover:text-[#E5231A] transition-colors">Blog</a>
          <a href="#contato" className="hover:text-[#E5231A] transition-colors">Contato</a>
        </div>


        <a href="#contato"
          className="hidden md:inline-block bg-[#E5231A] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#B81A12] transition-colors"
        >
          Agendar horário
        </a>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-white text-sm">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como funciona</a>
          {branches?.map((branch) => (
            <Link key={branch.id} to={`/unidades/${branch.id}`}>
              {branch.name}
            </Link>
          ))}
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </div>
      )}
    </header>
  )
}