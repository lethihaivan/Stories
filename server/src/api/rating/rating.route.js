import { Router } from 'express'

import { create } from './rating.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.post('/', authenticate(), create)

export default router