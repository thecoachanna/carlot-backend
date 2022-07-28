const User = require('../model/User')

const addReview = (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id, (err, user) =>{
    if(err){
        res.status(400).json(err)
        return
    } 
        console.log(req.user)
        req.body.reviewer = req.user._id;
        user.reviews.push({"text":req.body.text});
        user.save((err, user,n) => { 
            res.redirect(`/cars/${req.params.id}`)
            
        })
        console.log(user.reviews) 
    })
}

module.exports = {
    addReview

}