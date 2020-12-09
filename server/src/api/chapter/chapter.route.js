import { Router } from 'express'
import { middleware as query } from 'querymen'

import { create, getById, index, update } from './chapter.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.get('', query(), index)
router.post('/', authenticate(['admin']), create)
router.put('/:id', authenticate(['admin']), update)
router.get('/:id', getById)
export default router


