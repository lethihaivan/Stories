import { Router } from 'express'

import authApi from '../api/auth/auth.route'
import userApi from '../api/user/user.route'
import authorApi from '../api/author/author.route'
import chapterApi from '../api/chapter/chapter.route'
import categoryApi from '../api/category/category.route'
import commentApi from '../api/comment/comment.route'
import storyApi from '../api/story/story.route'
import ratingApi from '../api/rating/rating.route'

const router = new Router()

router.use('/auth', authApi)
router.use('/users', userApi)
router.use('/authors', authorApi)
router.use('/chapters', chapterApi)
router.use('/categories', categoryApi)
router.use('/comments', commentApi)
router.use('/stories', storyApi)
router.use('/ratings', ratingApi)

export default router

