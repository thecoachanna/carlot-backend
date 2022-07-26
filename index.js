const express = require('express')
const app = express()
const PORT = 4000
const morgan = require('morgan')
const carRoutes = require('./routes/carRoutes')
const authRoutes = require('./routes/authRoutes')

const cors = require('cors')
require('./db/connection')

//hello
// anna's hello
//hello from Sasha
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/cars', carRoutes)
// app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.json('Welcome to the Car Shop')
})

app.listen(PORT, ()=> {
    console.log('Connected on', PORT)
})