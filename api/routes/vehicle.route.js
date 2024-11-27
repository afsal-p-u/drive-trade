const router = require('express').Router()
const { addNewVehicle } = require('../controllers/vehicle/vehicle.seller.controller')
const { getAllVehicles } = require('../controllers/vehicle/vehicle.user.controller')

// user routes
router.get('/', getAllVehicles)

// seller routes
router.post('/add-vehicle', addNewVehicle)

// admin routes
// common routes
// admin & user routes
// admin & seller routes
// user & seller router

module.exports = router
