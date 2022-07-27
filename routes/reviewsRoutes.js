const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviewsController')

router.post('/', reviewsCtrl.addReview)

module.exports = router
