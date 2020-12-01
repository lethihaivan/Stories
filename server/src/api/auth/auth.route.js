import { Router } from 'express'

import { login, register, getMe } from './auth.controller'
import { authenticate } from '../../middleware/authenticate';
const router = new Router()

router.post('/login', login);
router.post('/register', register)
router.get('/me', authenticate(['admin']), getMe)
// router.put('/:id', userController.updateInfo)

export default router