const express = require('express')

const userController = require('./controller')
const router = express.Router()

router.get('/', userController.index)
router.put('/:id', userController.updateInfo)

module.exports = router