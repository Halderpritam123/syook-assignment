const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newItem = await Item.create({ name, price });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};
