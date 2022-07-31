const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS =6

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

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    })
  
  });

const User = mongoose.model('User', userSchema)

module.exports = User