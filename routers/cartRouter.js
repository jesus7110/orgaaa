const router = require('express').Router();
const {addToCart, getCart, removeFromCart, updateCartItemQuantity} = require('../controllers/cartController');



// Route to add an item to the user's cart

/* middleware to check authenticity of user must be handled properly  */
router.route('/cart/add/:userId')
  .post(addToCart);

// Route to get the user's cart
router.route('/cart/:userId')
  .get(getCart);

// Route to remove an item from the user's cart
router.route('/cart/remove/:userId/:productId')
  .delete(removeFromCart);

// Route to update the quantity of an item in the user's cart
router.route('/cart/update/:userId/:productId')
  .put(updateCartItemQuantity);

module.exports = router;
