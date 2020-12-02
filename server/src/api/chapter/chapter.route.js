import { Router } from 'express'

import { create, getById, index, update } from './chapter.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.post('/', authenticate(['admin']), create)
router.put('/:id', authenticate(['admin']), update)
router.get('', index)
router.get('/:id', getById)
export default router


