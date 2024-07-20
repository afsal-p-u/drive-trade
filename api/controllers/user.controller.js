const cryptoJs = require('crypto-js')
const userModel = require('../models/user.model')

const SignUp = async (req, res) => {
    const existingUser = await userModel.findOne({ name: req.body.name })
    if (existingUser) {
        return res.status(500).json({ message: "Username already exist!" })
    }

    const existingEmail = await userModel.findOne({ email: req.body.email })
    if (existingEmail) {
        return res.status(500).json({ message: "Email already exist!" })
    } 

    try {
        const newUser = new userModel({
            ...req.body,
            password: cryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET)
        })

        await newUser.save();
        return res.status(200).json({ message: "User registered successfully" })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

const SignIn = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

module.exports = { SignUp, SignIn }