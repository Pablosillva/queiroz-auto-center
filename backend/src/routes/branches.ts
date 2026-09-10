import { Router } from 'express'
import { getBranch, listBranches } from '../controllers/branchesController'

const router = Router()

router.get('/', listBranches)
router.get('/:branchId', getBranch)

export default router