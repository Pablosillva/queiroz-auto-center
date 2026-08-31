const testimonials = [
  { name: 'Renata Alves', vehicle: 'Honda Civic', quote: 'Levei o carro puxando pro lado e saí com o alinhamento perfeito. Explicaram tudo antes de mexer.' },
  { name: 'Marcos Silveira', vehicle: 'VW Gol', quote: 'Diagnóstico da injeção eletrônica certeiro. Outra oficina não tinha achado o problema.' },
  { name: 'Camila Duarte', vehicle: 'Fiat Argo', quote: 'Revisão completa com laudo de tudo que foi checado. Isso é raro de ver hoje em dia.' },
]

export function Testimonials() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#0A0E27] mb-2">Quem já passou por aqui</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white border border-gray-100 rounded-lg p-6 border-l-4 border-l-[#E5231A]">
            <p className="text-[#0A0E27] text-sm mb-4">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0B1B63] text-white flex items-center justify-center text-sm font-bold">
                {t.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.vehicle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}