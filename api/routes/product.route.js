const { newProductController, getAllProductsController, getSellerProductsController } = require('../controller/product.controller')
const { isShouldBeSeller } = require('../middlewares/auth.middleware')

const router = require('express').Router()

// seller
router.post('/new', isShouldBeSeller, newProductController)
router.get('/seller/:id', isShouldBeSeller, getSellerProductsController)

// public
router.get('/', getAllProductsController)

module.exports = router