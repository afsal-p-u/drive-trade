const mongoose = require('mongoose')

const tempdataSchema = new mongoose.Schema({
    OTP: { type: Number }
})

module.exports = mongoose.model("auth", tempdataSchema)