const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
}) 

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;