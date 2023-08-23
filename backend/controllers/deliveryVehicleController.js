const DeliveryVehicle = require('../models/DeliveryVehicle');

exports.createDeliveryVehicle = async (req, res) => {
  try {
    const { registrationNumber, vehicleType, city } = req.body;
    const newDeliveryVehicle = await DeliveryVehicle.create({
      registrationNumber,
      vehicleType,
      city,
    });
    res.status(201).json(newDeliveryVehicle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create delivery vehicle' });
  }
};

exports.getDeliveryVehicles = async (req, res) => {
  try {
    const deliveryVehicles = await DeliveryVehicle.find();
    res.status(200).json(deliveryVehicles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch delivery vehicles' });
  }
};
