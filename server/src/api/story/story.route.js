import { Router } from 'express'

import { create, index, getById } from './story.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.post('/',  authenticate(['admin']), create)
router.get('/', index)
router.get('/:id', getById)

export default router
