const User = require('../model/User')
const bcrypt = require('bcrypt')
const {createToken} = require('../utils/tokenService')
const {payloadFromUser} = require('../utils/utilities')

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: new RegExp(email, 'i')}, (err, user) => {
        if(err){
            res.status(400).json(err)
            return
        }
        if(!user){
            res.status(400).json({email: "User not found!"})
            return
        }

        if(bcrypt.compareSync(password, user.password)){
            res.json({'access':createToken(payloadFromUser(user))})
        }else{
            res.status(400).json({password: "Incorrect password"})
        }

})
}

function signup(req, res) {
    const email = req.body.email
    const pass1 = req.body.pass1
    const pass2 = req.body.pass2

    if(pass1 !== pass2) {
        res.status(400).json({password: 'passwords dont match!'})
        return
    }

    User.findOne({email: new RegExp(email, 'i')}, (err, user) => {
        if(err){
            res.status(400).json(err)
            return
        }
        if (user) {
            res.status(400).json({email: 'User already exists'})
            return
        }
        User.create({email: email, password:pass1}, (err, newUser) => {
            res.json({access: createToken({
                email: newUser.email,
                id: newUser._id,
            })})
        })

    })
}



module.exports = {
    login,
    signup
}