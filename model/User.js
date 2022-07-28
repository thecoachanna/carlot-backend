const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
    text: String,
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "User"
    }
})

const userSchema = new mongoose.Schema({
    isAdmin: Boolean,
    name: String,
    email: String,
    password: String,
    reviews: [reviewsSchema]
})

const User = mongoose.model('User', userSchema)

module.exports = User