const User = require('../model/User')

const addReview = (req, res) => {
    User.findById(req.params.id, (err, review) =>{
    if(err){
        res.status(400).json(err)
        return
    }
    console.log(req.user)
        req.body.reviewer = req.user._id;
        game.reviews.push(req.body);
        game.save((err) => {if(err){console.log(err)}})
        console.log(user.reviews)
        res.redirect(`/cars/${user._id}`)
    })
}

module.exports = {
    addReview

}