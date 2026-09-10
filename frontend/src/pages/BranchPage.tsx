import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import type { Branch, Service } from '../types'
import { ServiceCard } from '../components/ServiceCard'
import { ProcessSteps } from '../components/ProcessSteps'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'

export function BranchPage() {
  const { branchId } = useParams()
  const apiUrl = import.meta.env.VITE_API_URL

  const { data: branch, loading: loadingBranch, error: errorBranch } = useFetch<Branch>(`${apiUrl}/branches/${branchId}`)
  const { data: services, loading: loadingServices } = useFetch<Service[]>(`${apiUrl}/services`)

  if (loadingBranch || loadingServices) {
    return <main className="pt-24 px-6"><p className="text-gray-500">Carregando...</p></main>
  }

  if (errorBranch || !branch) {
    return <main className="pt-24 px-6"><p className="text-gray-500">Unidade não encontrada.</p></main>
  }

  return (
    <>
      <main className="pt-24">
        <div className="h-72 bg-cover bg-center flex items-end" style={{ backgroundImage: `url(${branch.coverImage})` }}>
          <div className="bg-gradient-to-t from-black/80 to-transparent w-full p-8">
            <h1 className="text-white text-3xl md:text-4xl font-bold">{branch.name}</h1>
            <p className="text-white/80 mt-1">{branch.address}</p>
          </div>
        </div>

        <div className="px-6 py-10 max-w-3xl">
          <p className="text-gray-700">{branch.description}</p>
        </div>

        <section className="px-6 py-10 max-w-6xl mx-auto" id="servicos">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#0A0E27] mb-2">Serviços dessa unidade</h2>
            <p className="text-gray-500 max-w-xl">A {branch.name} oferece a linha completa de serviços da Queiroz Auto Center.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
            {services?.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </section>

        <ProcessSteps />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}