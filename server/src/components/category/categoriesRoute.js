const express = require('express')

const categoryController = require('./categoriesController')
const router = express.Router()

router.post('/', categoryController.create)
router.get('/', categoryController.index)
// router.get('/:id', categoryController.index)

module.exports = router