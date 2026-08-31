import type { Service } from '../types'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 border border-gray-100 hover:bg-[#F0F2F6] transition-colors group relative overflow-hidden">
      <h3 className="font-bold text-lg mb-2 text-[#0A0E27]">{service.name}</h3>
      <p className="text-gray-500 text-sm">{service.description}</p>
      <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#E5231A] group-hover:w-full transition-all duration-300" />
    </div>
  )
}