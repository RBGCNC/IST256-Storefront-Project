const mongoose = require('mongoose');

const ShopperSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  age: {
    type: Text,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  street1: {
    type: String,
    required: true
  },
  street12: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Shopper', ShopperSchema);