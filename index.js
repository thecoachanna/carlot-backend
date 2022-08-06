const express = require('express')
const app = express()
const PORT = normalizePort(process.env.PORT || '4000')
const morgan = require('morgan')
const carRoutes = require('./routes/carRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

require('dotenv').config()

 
const cors = require('cors')
require('./db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/cars', carRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.json('Welcome to the Car Shop')
})

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {return val;}
    if (port >= 0) {return port;}
    return false;
  }

app.listen(PORT, ()=> {
    console.log('Connected on', PORT)
})