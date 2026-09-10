import { Router } from 'express'
import { listBranches } from '../controllers/branchesController'

const router = Router()

router.get('/', listBranches)

export default router