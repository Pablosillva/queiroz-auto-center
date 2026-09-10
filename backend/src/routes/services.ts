import { Router } from 'express'
import { listServices } from '../controllers/servicesController'

const router = Router()

router.get('/', listServices)

export default router