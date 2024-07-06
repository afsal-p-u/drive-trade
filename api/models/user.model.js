const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    profilePic: { type: String, required: true },
})

export default mongoose.model('User', UserSchema)