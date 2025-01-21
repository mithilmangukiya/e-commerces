const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(() => console.log("Connection to the database established"))
.catch((err) => console.log(err.message));




const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: Buffer,
    required: true,
  },
  stockQuantity: {
    type: Number,
    default: 0,
  },
  attributes: [{
    key: String,
    value: String
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);


