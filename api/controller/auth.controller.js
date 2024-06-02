const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const authModel = require('../models/auth.model')

const signInController = async (req, res) => {
    const { email, password } = req.body

    const user = await authModel.findOne({ email })
    if (!user) {
        return res.status(500).json("User not found")
    }

    const decryptedPassword = cryptoJs.AES.decrypt(user.password, process.env.CRYPTOJS_SECRET).toString(cryptoJs.enc.Utf8)
    if (password !== decryptedPassword) {
        return res.status(500).json("Invalid password") 
    }

    
    const age = 1000 * 60 * 60 * 24 * 7

    const accessToken = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        isUser: user.isUser
    }, 
    process.env.JWT_SECRETKEY,
    {
        expiresIn: age
    })
    
    return res.cookie("token", accessToken, { 
        httpOnly: true,
        // secure: true,
        maxAge: age
    }).status(200).json({ info: user._id })
}   

const signUpController = async (req, res) => {
    const { email, username } = req.body

    const user = await authModel.findOne({ email })
    if (user) {
        return res.status(500).json({ message: "Email already in use!" })
    }

    const checkUsername = await authModel.findOne({ username })
    if (checkUsername) {
        return res.status(500).json({ message: "Username already in use!" })
    }

    await new authModel({
        ...req.body,
        password: cryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET)
    }).save();

    return res.status(200).json({ message: "User registered" })
}

const signOutController = async () => {

}

module.exports = { signInController, signUpController, signOutController }