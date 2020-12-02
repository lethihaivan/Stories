import { Router } from 'express'

const commentController = require('./comment.controller')
const router =  Router()

router.get('/', commentController.index)
router.post('/', commentController.create)
router.delete('/', commentController.removeAll)
router.delete('/:id', commentController.remove)

export default router
