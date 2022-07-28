const User = require('../model/User')

const addReview = (req, res) => {
    console.log(req.params.userId)
    User.findById(req.params.userId, (err, user) =>{
    if(err){
        res.status(400).json(err)
        return
    } 
        
        user.reviews.push({"text":req.body.text});
        user.save((err, user,n) => { 
            res.json({text:req.body.text})
            
        })
        // console.log(user.reviews) 
    })
}

module.exports = {
    addReview

}