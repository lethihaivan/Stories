import { Router } from 'express'
import { middleware as query } from 'querymen'

import { create, index, getById, getChaptersOfStory, update } from './story.controller'
import { authenticate } from '../../middleware/authenticate'

const router = new Router()

router.get('/', query(), index)
router.get('/:id', getById)
router.get('/:id/chapters', query(), getChaptersOfStory)
router.post('/', authenticate(['admin']), create)
router.put('/:id', authenticate(['admin']), update)

export default router
