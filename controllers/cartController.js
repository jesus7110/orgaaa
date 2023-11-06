const { cart } = require('../models/cartModel');

// Function to add an item to the user's cart
const addToCart = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user's ID is passed as a route parameter
    const { product, quantity } = req.body;

    // Find the user's cart or create one if it doesn't exist
    let userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      userCart = new cart({ user: userId, items: [] });
    }

    // Check if the product already exists in the cart; if so, update the quantity
    const existingCartItem = userCart.items.find((item) => item.product.equals(product));

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      userCart.items.push({ product, quantity });
    }

    await userCart.save();

    return res.status(201).json({ success: true, message: 'Item added to the cart', data: userCart });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while adding an item to the cart.', error });
  }
};

// Function to get the user's cart
const getCart = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user's ID is passed as a route parameter
    const userCart = await cart.findOne({ user: userId });

    if (userCart) {
      return res.status(200).json({ success: true, data: userCart });
    } else {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while fetching the cart.', error });
  }
};

// Function to remove an item from the user's cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user's ID is passed as a route parameter
    const productId = req.params.productId; // Assuming the product's ID is passed as a route parameter

    const userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    // Find and remove the item from the cart
    const index = userCart.items.findIndex((item) => item.product.equals(productId));

    if (index !== -1) {
      userCart.items.splice(index, 1);
      await userCart.save();
      return res.status(200).json({ success: true, message: 'Item removed from the cart', data: userCart });
    } else {
      return res.status(404).json({ success: false, message: 'Item not found in the cart' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while removing an item from the cart.', error });
  }
};

// Function to update the quantity of an item in the user's cart
const updateCartItemQuantity = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user's ID is passed as a route parameter
    const productId = req.params.productId; // Assuming the product's ID is passed as a route parameter
    const newQuantity = req.body.quantity; // The new quantity to set

    const userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    // Find the item in the cart and update the quantity
    const cartItem = userCart.items.find((item) => item.product.equals(productId));

    if (cartItem) {
      cartItem.quantity = newQuantity;
      await userCart.save();
      return res.status(200).json({ success: true, message: 'Item quantity updated in the cart', data: userCart });
    } else {
      return res.status(404).json({ success: false, message: 'Item not found in the cart' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while updating item quantity in the cart.', error });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateCartItemQuantity,
};
