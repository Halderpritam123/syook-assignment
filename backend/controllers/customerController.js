const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
  try {
    const { name, city } = req.body;
    const newCustomer = await Customer.create({ name, city });
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};
