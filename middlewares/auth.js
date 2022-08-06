const jwt = require('jsonwebtoken')

require('dotenv').config()
const SECRET = process.env.SECRET

function authMiddleware(req, res, next) {
    let token = req.get('Authorization')
    // console.log(token)
    if (token){
        token = token.replace('Bearer ', '')

        jwt.verify(token, SECRET, function(err, decoded) {
            // if (err) next(err)
    
            req.user = decoded.user
            next()
    
        })

    } else {
        // res.status(403).json({})
    }

    
}

module.exports = authMiddleware