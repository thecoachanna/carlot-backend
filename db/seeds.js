require('./connection')
const Car = require('../model/Car')
const bcrypt = require('bcrypt')
const User = require('../model/User')




const cars = [
    {   
        image: ['https://images.craigslist.org/00j0j_9HGLm30zRdDz_0CI0t2_600x450.jpg','https://images.craigslist.org/00R0R_2rKDFQb8Gbez_0CI0t2_600x450.jpg', 'https://cdn.carbase.com/dealer/lawmotors/5061038_157378176_640.jpg'],
        price: 11500,
        title: "Clean",
        location: "Dallas, TX",
        year: 2017,
        mileage: 210000,
        transmission: 'automatic',
        color: 'Red',
        notes: 'Like new!',
        owner: 'Tom',
        make: "Ford Ranger",
        model: "XLT"
    },
    {   
        image: ['https://bit.ly/3dcJvQB'],
        price: 13500,
        title: "Clean",
        location: "Denver, CO",
        year: 2015,
        mileage: 120000,
        transmission: 'automatic',
        color: 'Red',
        notes: 'Runs like new.',
        owner: 'Alex',
        make: "Audi",
        model: "RS-7"
    },
    {   
        image: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
        price: 27000,
        title: "Clean",
        location: "LA",
        year: 2021,
        mileage: 3000,
        transmission: 'Automatic',
        color: 'Royal Blue',
        notes: 'Sad to have to sell it.',
        owner: 'Kelly',
        make: "Chevrolet",
        model: "Camaro"
    },
    {   
        image: ['https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x1_5/dam/pnr/2020/company/Deliveries-Q1-2020/b2-The-current-Porsche-911-model-series-is-still-popular-with-customers.jpg/jcr:content/b2-The%20current%20Porsche%20911%20model%20series%20is%20still%20popular%20with%20customers.jpg', 'https://s1.cdn.autoevolution.com/images/news/new-porsche-911-gt3-wears-guards-red-like-a-devil-looks-totally-badass-158411_1.jpg'],
        price: 90500,
        title: "Clean",
        location: "4400 W Plano Pkwy, Plano, TX 75093",
        year: 2016,
        mileage: 85000,
        transmission: 'Automatic',
        color: 'Red',
        notes: 'Excellent condition!',
        owner: 'John',
        make: "Porsche",
        model: "911 GT3"
    },
    {   
        image: ['https://media.ed.edmunds-media.com/lexus/rx-350/2020/oem/2020_lexus_rx-350_4dr-suv_f-sport_fq_oem_2_815.jpg'],
        price: 25000,
        title: "Clean",
        location: "1401 Sonoma Blvd, Vallejo, CA 94590",
        year: 2019,
        mileage: 110000,
        transmission: 'automatic',
        color: 'Silver',
        notes: 'in good codition, but has some dent',
        owner: 'Jessica',
        make: "Lexus",
        model: "RX 350"
    }
   
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



    User.create({ email: "Sasha@test.com", isAdmin: true, password: '1234'}, (err, user) => {
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