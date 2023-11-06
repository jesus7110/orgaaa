const { Schema, model } = require('mongoose');

const cartItemSchema = Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to your Product model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1, // Default quantity if not specified
  },
  // You can add more fields related to cart items, such as price, subtotal, etc.
});

const cartSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to your User model
    required: true,
  },
  items: [cartItemSchema],
  // You can include more fields like cart total, date, etc.
});

module.exports.cart = model('Cart', cartSchema);
