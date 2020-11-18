const express = require('express')

const ratingController = require('./ratingsController')
const router = express.Router()

router.post('/', ratingController.create)

module.exports = router