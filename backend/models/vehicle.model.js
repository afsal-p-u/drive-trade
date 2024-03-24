const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    transmission: { type: String, required: true },
    varient: { type: String, required: true },
    accidentHistory: { type: String, required: true },
    owner: { type: String, required: true },
    type: { type: String, required: true },
    seater: { type: String, required: true },
    emi: { type: String, required: true },
    insurance: { type: String, required: true },
    color: { type: String, required: true },
    model: { type: String, required: true },
    fuel: { type: String }, 
    runnedby: { type: Number },
    price: { type: Number },
})

module.exports = mongoose.model("vehicle", vehicleSchema)