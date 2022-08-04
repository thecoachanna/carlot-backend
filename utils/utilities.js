function payloadFromUser(user){
    return{
        email : user.email,
        id:user._id
    }
}

module.exports ={
    payloadFromUser
}