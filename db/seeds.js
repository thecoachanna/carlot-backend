require('./connection')
const Car = require('../model/Car')
// const User = require('../model/User')


const cars = [
    {   
        image: 'skefnwf',
        price: 13500,
        title: "Clean",
        location: "Denver, Co",
        year: 2015,
        mileage: 120000,
        transmission: 'automatic',
        color: 'black',
        notes: 'runs like new',
        ownerInfo: '322E'
    },
    {   
        image: 'dgrjaegp',
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

