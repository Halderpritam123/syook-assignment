const Order = require('../models/Order');
const DeliveryVehicle = require('../models/DeliveryVehicle');
const Customer = require('../models/Customer');
const Item = require('../models/Item');

exports.createOrder = async (req, res) => {
  try {
    const { customerId, itemId } = req.body;

    // Fetch customer and item details
    const customer = await Customer.findById(customerId);
    const item = await Item.findById(itemId);

    // Find a suitable delivery vehicle based on city match and activeOrdersCount
    const deliveryVehicle = await DeliveryVehicle.findOne({
      city: customer.city,
      activeOrdersCount: { $lt: 2 },
    });

    if (!deliveryVehicle) {
      return res.status(400).json({ error: 'No suitable delivery vehicle available' });
    }

    // Create the order
    const newOrder = await Order.create({
      customerId,
      itemId,
      price: item.price,
      deliveryVehicleId: deliveryVehicle._id,
    });

    // Update activeOrdersCount for the delivery vehicle
    deliveryVehicle.activeOrdersCount += 1;
    await deliveryVehicle.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

exports.markOrderDelivered = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // Find the order
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Mark the order as delivered
    order.isDelivered = true;
    await order.save();

    // Update activeOrdersCount for the delivery vehicle
    const deliveryVehicle = await DeliveryVehicle.findById(order.deliveryVehicleId);
    if (deliveryVehicle) {
      deliveryVehicle.activeOrdersCount -= 1;
      await deliveryVehicle.save();
    }

    res.status(200).json({ message: 'Order delivered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark order as delivered' });
  }
};
