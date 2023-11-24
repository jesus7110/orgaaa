const { Schema, model } = require('mongoose');
const productSchema = Schema({
  productid: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  isFeatured: {
    type: Boolean,
  },
  vipDiscout: {
    type: String,
  },
  productTag : {
    type: String,
    enum: ['Popular','New','Most'],
    default: 'Popular',
  },
  images:{
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});


module.exports.product = model('Product', productSchema);