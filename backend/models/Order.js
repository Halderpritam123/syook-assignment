const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String},
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  price: Number,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  deliveryVehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryVehicle' },
  isDelivered: { type: Boolean, default: false },
},{
    versionKey:false
  });

module.exports = mongoose.model('Order', orderSchema);
