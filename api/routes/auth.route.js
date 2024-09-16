const router = require('express').Router()
const { SignUp, SignIn } = require('../controllers/user.controller')

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)
router.post('/sign-out', () => {})

module.exports = router