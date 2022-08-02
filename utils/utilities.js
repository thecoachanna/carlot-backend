function payloadFromUser(user){
    return{
        emai: user.email,
        id:user._id
    }
}

module.exports ={
    payloadFromUser
}