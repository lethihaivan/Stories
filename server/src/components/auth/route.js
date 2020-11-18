const express = require('express')

const authController = require('./controller')
const router = express.Router()

router.post('/login', authController.login);
router.post('/register', authController.register)
// router.get('/', userController.index)
// router.put('/:id', userController.updateInfo)

module.exports = router