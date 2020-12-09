import { Router } from 'express'
import { middleware as query } from 'querymen'

import { create, index, update, storiesOfCategory } from './category.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()


router.post('/', authenticate(['admin']), create)
router.get('/', index)
router.put('/:id', update)
router.get('/:id/stories', query(), storiesOfCategory)

export default router
