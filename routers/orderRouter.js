const express = require('express');
const router = express.Router();
const { placeOrder, updateOrderStatus } = require('./yourOrderController');
const { authenticateToken, authorizeAdmin } = require('./yourAuthMiddleware'); // Include your authentication middleware

