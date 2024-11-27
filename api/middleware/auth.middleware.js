const jwt = require('jsonwebtoken')

// verify user
// verify seller
// verify admin
// verify user & seller
// verify admin & seller
// verify admin & user
// common
const verifyCommonAuth = (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Your are not authorized" })
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRETKEY)

        if (user.isUser == 'admin' || user.isUser == 'seller' || user.isUser == 'user') {
            next();
        }
    } catch (err) {
        return res.status(500).json({ message: "Invalid token" })
    }
}

module.exports = { verifyCommonAuth }