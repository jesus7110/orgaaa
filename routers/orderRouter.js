const express = require('express');
const router = express.Router();
const { placeOrder, updateOrderStatus } = require('../controllers/orderController');
const { authenticateUserToken, authenticateToken, authorizeAdmin } = require ('../middlewares/authMiddleware')
// Route to place an order by a user
router.post('/placeOrder', authenticateUserToken, placeOrder);

// Route to update the status of an order by admin
router.patch('/updateOrderStatus',authenticateToken,authorizeAdmin, updateOrderStatus);

module.exports = router;