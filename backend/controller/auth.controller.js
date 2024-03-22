const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const authModel = require('../models/auth.model')

const loginController = async (req, res) => {
    const { email, password } = req.body

    const user = await authModel.find({ email })
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
    const { username, email } = req.body

    const checkEmail = await authModel.find({ email })
    if (checkEmail) {
        return res.status(200).json("Email already exist!")
    }

    const checkUsername = await authModel.find({ username })
    if (checkUsername) {
        return res.status(200).json("Usename already exist!")
    }

    await new authModel({
        ...req.body,
        password: cryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET)
    }).save();

    return res.status(200).json("User registered successfully")
}

module.exports = { loginController, registerController }