const mongoose = require('mongoose')

const DBconnect = () => {
    mongoose.connect(process.env.MONGO_URL).then((res) => {
        console.log('DB connection successfull')
    }).catch((err) => {
        console.log("Error connecting DB", err)
    })
}

module.exports = DBconnect