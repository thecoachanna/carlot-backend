const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/car-shop'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`Connected on ${instance.connections[0].name }`)
})
.catch(err => console.log(`Error in connection, ${err}`))