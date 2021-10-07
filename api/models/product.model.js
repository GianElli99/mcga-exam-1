const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'The name field is required'] },
  price: {
    type: Number,
    required: [true, 'The price field is required'],
  },
  shortDescription: {
    type: String,
    required: [true, 'The shortDescription field is required'],
  },
  fullDescription: {
    type: String,
    required: [true, 'The fullDescription field is required'],
  },
  isDigital: {
    type: Boolean,
    required: [true, 'The isDigital field is required'],
  },
  weightInKg: {
    type: Number,
  },
});

module.exports = mongoose.model('Product', productSchema);
