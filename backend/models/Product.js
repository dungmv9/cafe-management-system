const mongoose = require('mongoose');

// Định nghĩa cấu trúc sản phẩm
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Cà phê', 'Trà', 'Nước', 'Ăn vặt']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['Còn bán', 'Hết hàng'],
    default: 'Còn bán'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
