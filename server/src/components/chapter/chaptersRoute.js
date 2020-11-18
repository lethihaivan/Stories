const express = require('express')

const chapterController = require('./chaptersController')
const router = express.Router()

router.post('/', chapterController.create)

module.exports = router