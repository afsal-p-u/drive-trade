const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String }, 
    number: { type: Number },
    isUser: { type: String, enum: ["user", "seller", "admin"], default: "user" }
})

module.exports = mongoose.model("auth", authSchema)