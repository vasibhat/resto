const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Veg', 'Non-Veg', 'Drink', 'Alcoholic Drink']
  },
  imageURL: {
    type: String,
    required: false
  },
  availability: {
    type: Boolean,
    required: true,
    default: true
  }
});

const orderItemSchema = new mongoose.Schema({
  menuItem: menuItemSchema,
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
});

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  tableNumber: {
    type: Number,
    required: true
  },
  items: [orderItemSchema],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Completed'],
    default: 'Pending'
  },
  orderTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  billRequested: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
