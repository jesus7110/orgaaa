const express = require('express');
const router = express.Router();
const { placeOrder, updateOrderStatus } = require('./yourOrderController');
const { authenticateToken, authorizeAdmin } = require('./yourAuthMiddleware'); // Include your authentication middleware

// Route to place an order by a user
router.post('/placeOrder', authenticateToken, placeOrder);

// Route to update the status of an order by admin
router.patch('/updateOrderStatus', authenticateToken, authorizeAdmin, updateOrderStatus);

module.exports = router;