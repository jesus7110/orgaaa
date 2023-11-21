const { Order } = require('../models/orderModel');
const { User } = require('../models/userModel');
const { Product } = require('../models/productModel');

// Controller for placing an order by a user
module.exports.placeOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount, paymentMethod, shippingAddress } = req.body;

    // Validate if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Validate if products exist and get their details
    const productsDetails = await Promise.all(
      products.map(async (product) => {
        const productDetails = await Product.findById(product.productId);
        if (!productDetails) {
          return res.status(404).json({
            success: false,
            message: `Product with ID ${product.productId} not found`,
          });
        }

        return {
          productId: productDetails._id,
          quantity: product.quantity,
          price: productDetails.price,
        };
      })
    );

    // Create the order
    const order = new Order({
      userId,
      products: productsDetails,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    const savedOrder = await order.save();

    return res.status(201).json({ success: true, message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    return res.status(500).json({ success: false, message: 'An error occurred while placing the order' });
  }
};

// Controller for updating the status of an order by admin
module.exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    // Validate if the order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    // Only allow admin to update the status
    // You may need to implement a more robust authentication and authorization mechanism
    // This is just a simple example
    if (req.user.role !== 'admin1') {
      return res.status(403).json({ success: false, message: 'Forbidden: Admin access only' });
    }

    // Update the status
    order.status = status;
    const updatedOrder = await order.save();

    return res.status(200).json({ success: true, message: 'Order status updated successfully', order: updatedOrder });
  } catch (error) {
    console.error('Error updating order status:', error);
    return res.status(500).json({ success: false, message: 'An error occurred while updating the order status' });
  }
};