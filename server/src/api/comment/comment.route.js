import { Router } from 'express'

import { index, create, remove, removeAll, getById } from './comment.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.get('/', index)

router.get('/:id', authenticate(), getById)

router.post('/', authenticate(), create)

router.delete('/', authenticate(['admin']), removeAll)

router.delete('/:id', authenticate(), remove)

export default router
