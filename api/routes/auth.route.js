const { signUpController, signInController, signOutController } = require('../controller/auth.controller')

const router = require('express').Router()

router.post('/sign-in', signInController)
router.post('/sign-up', signUpController)
router.post('/sign-out', signOutController)

module.exports = router