import { Router } from 'express'
import { middleware as query } from 'querymen'

import { index, updateInfo, reactStory, storiesFavoriteOfUser, commentsOfUser } from './user.controller'
import { authenticate } from '../../middleware/authenticate'
const router = new Router()

router.get('/', authenticate(['admin']), index)
router.get('/me/comments', authenticate(), commentsOfUser)

router.get('/storiesFavorite', authenticate(['admin']), query(), storiesFavoriteOfUser)
router.put('/:id', authenticate(['admin']), updateInfo)
router.post('/react_story', authenticate(['admin']), reactStory)

export default router