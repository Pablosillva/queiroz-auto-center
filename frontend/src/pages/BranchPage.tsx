import { useParams } from 'react-router-dom'
import { branches } from '../data/branches'

export function BranchPage() {
  const { branchId } = useParams()
  const branch = branches.find((b) => b.id === branchId)

  if (!branch) {
    return (
      <main className="pt-24 px-6">
        <p className="text-gray-500">Unidade não encontrada.</p>
      </main>
    )
  }

  return (
    <main className="pt-24">
      <div
        className="h-64 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${branch.coverImage})` }}
      >
        <div className="bg-black/50 w-full p-6">
          <h1 className="text-white text-3xl font-bold">{branch.name}</h1>
        </div>
      </div>

      <div className="px-6 py-10 max-w-3xl">
        <p className="text-gray-700 mb-6">{branch.description}</p>
        <p className="text-sm text-gray-500">{branch.address}</p>
        <p className="text-sm text-gray-500">{branch.phone}</p>
      </div>
    </main>
  )
}