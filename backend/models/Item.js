const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
},{
    versionKey:false
  });

module.exports = mongoose.model('Item', itemSchema);
