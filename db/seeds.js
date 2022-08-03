require('./connection')
const Car = require('../model/Car')
const bcrypt = require('bcrypt')
const User = require('../model/User')




const cars = [
    {   
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 13500,
        title: "clean",
        location: "Denver, Co",
        year: 2015,
        mileage: 120000,
        transmission: 'automatic',
        color: 'black',
        notes: 'runs like new',
        owner: 'adlfjhgad',
        make: "Audi",
        model: "RS-7"
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
        owner: 'rngegn',
        make: "Chevrolet",
        model: "Camaro"
    },
   
]


// Car.deleteMany({})
// .then(()=>{
//    return Car.insertMany(cars)
// })
// .then((cars) => {
//     console.log(cars)
// })
// .catch((err) =>{
//     console.log(err)
// }).
// finally(()=>{
//     process.exit()
// })

User.deleteMany({})
.then(() =>{

    User.create({ email: "Sasha", isAdmin: true, password: 'abc123'}, (err, user) => {
        cars.map((car) => {car.owner = user._id})
        // console.log(cars)

        Car.deleteMany({})
        .then(() => {
            return Car.insertMany(cars)
        })
        .then((insertedCars) =>{
            console.log(insertedCars)
        })
        .catch(err => console.error(err))
        .finally(() =>{
            process.exit()
        })
    })

})