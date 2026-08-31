import type { Service } from '../types'

export const services: Service[] = [
  { id: 'alinhamento', name: 'Alinhamento e balanceamento 3D', description: 'Geometria de precisão a laser para rodagem estável.', icon: 'alinhamento' },
  { id: 'injecao', name: 'Injeção eletrônica', description: 'Diagnóstico com scanner automotivo para falhas de motor.', icon: 'injecao' },
  { id: 'pneus', name: 'Venda e troca de pneus', description: 'Montagem, calibragem e descarte correto do pneu usado.', icon: 'pneus' },
  { id: 'suspensao', name: 'Suspensão', description: 'Amortecedores, molas e batentes revisados.', icon: 'suspensao' },
  { id: 'freios', name: 'Freios', description: 'Pastilhas, discos e fluido avaliados a fundo.', icon: 'freios' },
  { id: 'embreagem', name: 'Embreagem', description: 'Troca de kit completo com ajuste de acionamento.', icon: 'embreagem' },
  { id: 'motor', name: 'Motor', description: 'Reparo e manutenção preventiva.', icon: 'motor' },
  { id: 'fluidos', name: 'Todos os fluidos do veículo', description: 'Óleo, arrefecimento, freio e mais.', icon: 'fluidos' },
  { id: 'parabrisa', name: 'Limpadores de parabrisa', description: 'Palhetas e sistema de esguicho testados.', icon: 'parabrisa' },
]