const mongoose = require('mongoose')

const mongoURI = 'mongodb://127.0.0.1:27017/car-shop'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`Connected on ${instance.connections[0].name }`)
})
.catch(err => console.log(`Error in connection, ${err}`))