const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
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

    const otp = Math.floor(100000 + Math.random() * 900000)
    console.log(otp)

    try {
        const newUser = new userModel({
            ...req.body,
            password: cryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET),
        })

        await newUser.save();
        return res.status(200).json({ message: "User registered successfully" })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

const SignIn = async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email })
    if (!user) {
        return res.status(500).json({ message: "User does not exist" })
    }

    try {
        const decryptedPassword = cryptoJs.AES.decrypt(user.password, process.env.CRYPTOJS_SECRET).toString(cryptoJs.enc.Utf8);
        if (decryptedPassword !== req.body.password) {
            return res.status(500).json({ message: "Incorrect password" })
        }

        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            isUser: user.isUser
        },
        process.env.JWT_SECRETKEY,
        {
            expiresIn: age
        })

        return res.status(200).json({ message: "success", data: token })

    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

module.exports = { SignUp, SignIn }