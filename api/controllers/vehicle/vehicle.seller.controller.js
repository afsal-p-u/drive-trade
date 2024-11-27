const vehicleModel = require("../../models/vehicle.model");

const addNewVehicle = async (req, res) => {
  try {
    const vehicle = new vehicleModel({
      ...req.body,
    })

    await vehicle.save();
    return res.status(200).json({ message: "Vehicle added successfully" })
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { addNewVehicle };
