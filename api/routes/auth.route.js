const { registerController, loginController, logoutController } = require('../controller/auth.controller')

const router = require('express').Router()

router.post('/login', loginController)
router.post('/register', registerController)
router.post('/logout', logoutController)

module.exports = router