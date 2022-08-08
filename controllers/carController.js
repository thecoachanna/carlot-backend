const cloudinary = require('cloudinary').v2
const ObjectId = require('mongoose').Types.ObjectId


const Car = require('../model/Car')

const index = (req, res) => {
    let query = null   
    if(req.query.search){
        query = Car.find({make:new RegExp(req.query.search,'i')})
    }else{
        query =Car.find({})
    }

    query.exec((err,cars) => {
       
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(cars)
    })

    // Car.find({}, (err, cars)=>{
    //     if(err){
    //         res.status(400).json(err)
    //         return
    //     }
    //     res.json(cars)
    // })
}

const carDetails = (req, res) => {
    
    Car.findById(req.params.id, (err, car) => {
        
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(car)
    })
}

const postNewCar = async (req, res) => {
    // console.log(req.files)
    let uploadedImages = []
    
// cars.images = req.files.map(f => ({ url: f.path, filename: f.filename}))
owner = new ObjectId(req.user.id)
const createCar = (uploadedImages) => Car.create({...req.body,owner:owner, images: uploadedImages ?? [] }, (err, car) => {
            
    if (err) {
        res.status(400).json(err)
        return
    }
    car = req.body;
    res.json(car)

})

    req.files ? req.files.forEach((file) => {
        console.log(file)

        cloudinary.v2.uploader.upload(file.path, (error, result) => {
            

            const { url } = result

            uploadedImages.push(url)
            console.log(result, error);

            if (uploadedImages.length === req.files.length) {
                createCar(uploadedImages)
                
            }
        });
    }) : createCar()
    
    
}

const updateCar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body, (err, car) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Car.find({}, (error, cars ) =>{
            res.json(cars)
        })
    })
}

const deleteCar = (req, res) => {

   Car.findByIdAndDelete(req.params.id, (err, deletedCar) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(deletedCar)
   })
}


module.exports = {
    index,
    carDetails,
    postNewCar,
    updateCar,
    deleteCar
        
}