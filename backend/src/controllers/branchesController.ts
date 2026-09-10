import { Request, Response } from 'express'
import { branches } from '../data/branches'

export function listBranches(req: Request, res: Response) {
  res.json(branches)
}

export function getBranch(req: Request, res: Response) {
  const {branchId} = req.params
  const branch = branches.find((b)=> b.id === branchId)

  if (!branch) {
    return res.status(404).json({error: 'Unidade não encontrada'})
  }

  res.json(branch)
}