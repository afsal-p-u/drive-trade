const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    profilePic: { type: String },
    isVerified: { type: Boolean, default: false },
    isUser: { type: String, enum: ["seller", "admin", "user"], default: "user" },
    otp: { type: Number }
})

module.exports = mongoose.model('User', UserSchema)