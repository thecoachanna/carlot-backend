const router = require('express').Router()
const carController = require('../controllers/carController')
const multer  = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({ storage })

router.use(require('../middlewares/auth'))

router.get('/', carController.index )
router.get('/:id', carController.carDetails)
router.post('/', upload.array('photos', 12), carController.postNewCar)
router.put('/:id', carController.updateCar)
router.delete('/:id', carController.deleteCar)

module.exports = router