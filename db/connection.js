const mongoose = require('mongoose')
require('dotenv').config();


const mongoURI = 'mongodb://127.0.0.1:27017/car-shop'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`Connected on ${instance.connections[0].name }`)
})
.catch(err => console.log(`Error in connection, ${err}`))


// mongoose.connect(process.env.DATABASE_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// const db = mongoose.connection

// db.on('connected', () => {
//     console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
// })