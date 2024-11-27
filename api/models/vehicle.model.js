const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    fuel: { type: String, required: true, default: "petrol", enum: ["diesel", "petrol", "electric", "hybrid"] },
    category: { type: String, required: true },
    location: { type: String, required: true },
    features: { type: Array, default: [] },
    extraFeatures: { type: Array, default: [] },
    extraImages: { type: Array, default: [] },
})

module.exports = mongoose.model('Vehicle', VehicleSchema)