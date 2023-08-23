const express = require('express');
const router = express.Router();
const deliveryVehicleController = require('../controllers/deliveryVehicleController');

router.post('/', deliveryVehicleController.createDeliveryVehicle);
router.get('/', deliveryVehicleController.getDeliveryVehicles);

module.exports = router;
