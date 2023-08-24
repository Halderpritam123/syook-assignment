const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  city: String,
},{
    versionKey:false
  });

module.exports = mongoose.model('Customer', customerSchema);
