const User = require('../model/User')
const bcrypt = require('bcrypt')

const login = (req, res) => {
User.findOne({name: req.body.name}, (err, user) => {
    if(err){
        res.status(400).json(err)
    return
    }
    if(!user){
        res.status(400).json({msg: "Given Username doesn't exist"})
    return
    }

    if(bcrypt.compareSync(req.body.password, user.password)){
        delete user.password
        res.json(user)
    }else{
        res.status(204).json({msg: "Incorrect password"})
    }

})
}

module.exports = {
    login
}

