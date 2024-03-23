const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const authModel = require('../models/auth.model')

const loginController = async (req, res) => {
    const { email, password } = req.body

    const user = await authModel.findOne({ email })
    if (!user) {
        return res.status(500).json("User not found")
    }

    const decryptedPassword = cryptoJs.AES.decrypt(user.password, process.env.CRYPTOJS_SECRET).toString(cryptoJs.enc.Utf8)
    if (password !== decryptedPassword) {
        return res.status(200).json("Invalid password")
    }

    const accessToken = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    }, 
    process.env.JWT_SECRETKEY,
    {
        expiresIn: "4d"
    })

    return res.status(200).json(accessToken)
}   

const registerController = async (req, res) => {
    const { email, username } = req.body

    const user = await authModel.findOne({ email })
    if (user) {
        return res.status(401).json('Email already in use')
    }


    const checkUsername = await authModel.findOne({ username })
    if (checkUsername) {
        return res.status(401).json("Username already exist!")
    }

    await new authModel({
        ...req.body,
        password: cryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET)
    }).save();

    return res.status(200).json("User registered successfully")
}

module.exports = { loginController, registerController }