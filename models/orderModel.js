const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  number: {
    type: String,
    //required: true
},
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        //required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    //required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
    default: 'Pending',
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Debit Card', 'Net Banking', 'Cash on Delivery'],
    required: true,
  },
  shippingAddress: {
    // You can define the structure based on your requirements
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports.Order = model('Order', orderSchema);