const steps = [
  { number: '01', title: 'Agendamento', description: 'Você escolhe o dia e horário, presencial ou pelo WhatsApp.' },
  { number: '02', title: 'Diagnóstico', description: 'Inspeção e scanner eletrônico para identificar exatamente o problema.' },
  { number: '03', title: 'Orçamento', description: 'Você aprova o serviço e o valor antes de qualquer peça ser trocada.' },
  { number: '04', title: 'Entrega', description: 'Carro testado, checklist em mãos e explicação do que foi feito.' },
]

export function ProcessSteps() {
  return (
    <section className="bg-[#060F3A] px-6 py-16" id="processo">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Como funciona o atendimento</h2>
          <p className="text-[#AEB4CE] max-w-xl">
            Quatro etapas, sempre nessa ordem, para você saber exatamente o que esperar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span
                className="block text-5xl font-bold mb-3"
                style={{ color: 'transparent', WebkitTextStroke: '1.5px #E5231A' }}
              >
                {step.number}
              </span>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-[#AEB4CE] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}