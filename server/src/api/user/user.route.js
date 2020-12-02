import { Router } from 'express'

import { index, updateInfo } from './user.controller'
import { authenticate } from '../../middleware/authenticate'
const router = new Router()

router.get('/', authenticate(['admin']), index)
router.put('/:id', authenticate(['admin']), updateInfo)

export default router