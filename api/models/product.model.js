const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    runnedBy: { type: Number, required: true },
    fuel: { type: String, required: true }, 
    color: { type: String, required: true },
    transmission: { type: String, required: true },
    varient: { type: String, required: true },
    accidentHistory: { type: String, required: true },
    owner: { type: String, required: true },
    type: { type: String, required: true },
    seater: { type: Number, required: true },
    emi: { type: String, required: true },
    insurance: { type: String, required: true },
    description: { type: String, required: true },
    sellerID: { type: mongoose.Schema.ObjectId, required: true },
    image: { type: Array, default: [] },
    availability: { type: String, default: "Yes" },
})

module.exports = mongoose.model("product", productSchema)