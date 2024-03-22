const { registerController, loginController } = require('../controller/auth.controller')

const router = require('express').Router()

router.post('/login', loginController)
router.post('/register', registerController)

module.exports = router