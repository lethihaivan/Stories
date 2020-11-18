const express = require('express')

const storyController = require('./storiesController')
const router = express.Router()

router.get('/', storyController.index)
router.post('/', storyController.create)

module.exports = router