const express = require('express')

const commentController = require('./commentsController')
const router = express.Router()

router.get('/', commentController.index)
router.post('/', commentController.create)
router.delete('/', commentController.removeAll)
router.delete('/:id', commentController.remove)

module.exports = router