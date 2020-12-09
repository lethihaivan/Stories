import mongoose from 'mongoose'
import { Router } from 'express'
import { middleware as query } from 'querymen'

import { create, index, updateInfo, storiesOfAuthor } from './author.controller'
import { authenticate } from '../../middleware/authenticate'
const router = new Router()

router.post('/', authenticate(['admin']), create)
router.get('/', authenticate(['admin']), index)
router.put('/:id', authenticate(['admin']), updateInfo)
router.get('/:id/stories', query(), storiesOfAuthor)

// {
//   author: {
//     type: mongoose.Types.ObjectId,
//       path:
//       operator: '$eq'
//   }
// }
export default router