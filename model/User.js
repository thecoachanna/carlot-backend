const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    isAdmin: Boolean,
    name: String,
    password: String,
    reviews: String
})

const User = mongoose.model('User', userSchema)

module.exports = User