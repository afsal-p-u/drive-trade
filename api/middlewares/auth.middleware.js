const jwt = require('jsonwebtoken')

const isShouldBeSeller = async (req, res, next) => {
    const token = req.cookies.token

    if(!token) {
        return res.status(500).json("Not Authenticated")
    }

    jwt.verify(token, process.env.JWT_SECRETKEY, async (err, payload) => {
        if (err) {
            return res.status(500).json("Invalid token")
        }

        if (payload.isUser != "seller") {
            return res.status(500).json("Your not authorized to use")
        }
    })

    next()
}

module.exports = { isShouldBeSeller }