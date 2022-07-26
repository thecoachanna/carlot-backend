require('./connection')
const Car = require('../model/Car')
// const User = require('../model/User')


const cars = [
    {   
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 13500,
        title: "Audi",
        location: "Denver, Co",
        year: 2015,
        mileage: 120000,
        transmission: 'automatic',
        color: 'black',
        notes: 'runs like new',
        ownerInfo: '322E'
    },
    {   
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 27000,
        title: "Clean",
        location: "LA",
        year: 2021,
        mileage: 3000,
        transmission: 'automatic',
        color: 'bright red',
        notes: 'kkdrgperg',
        ownerInfo: 'rngegn'
    },
   
]

Car.deleteMany({})
.then(()=>{
   return Car.insertMany(cars)
})
.then((cars) => {
    console.log(cars)
})
.catch((err) =>{
    console.log(err)
}).
finally(()=>{
    process.exit()
})

