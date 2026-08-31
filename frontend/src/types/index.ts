export type Branch = {
  id: string
  name: string
  city: string
  address: string
  phone: string
  description: string
  coverImage: string
}

export type Service = {
  id: string
  name: string
  description: string
  icon: string
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export type Appointment = {
  id: string
  customerName: string
  phone: string
  email: string
  serviceId: string
  branchId: string
  preferredDate: string
  status: AppointmentStatus
  createdAt: string
}