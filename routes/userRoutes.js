const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviewsController')

router.post('/:userId/reviews', reviewsCtrl.addReview)
router.get('/:userId/reviews', reviewsCtrl.allReviewHandler)

module.exports = router
