import { Request, Response } from 'express'
import { services } from '../data/services'

export function listServices(req: Request, res: Response) {
  res.json(services)
}