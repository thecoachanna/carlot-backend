const router = require('express').Router()
const carController = require('../controllers/carController')

router.get('/', carController.index )
router.get('/:id', carController.carDetails)
router.post('/', carController.postNewCar)
router.put('/:id', carController.updateCar)
router.delete('/:id', carController.deleteCar)

module.exports = router