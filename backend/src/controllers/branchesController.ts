import { Request, Response } from 'express'
import { branches } from '../data/branches'

export function listBranches(req: Request, res: Response) {
  res.json(branches)
}