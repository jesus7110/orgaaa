const express = require('express')
require('dotenv').config();
const connectDB = require("./config/database");
const app = express()

//server start test
app.get('/', function (req, res) {
  res.send('Hello World')
})
//mongoDB connectiongit
connectDB();

// Import the userController
const userController = require('./controllers/userController');

//import productcontroller

// Define routes and associate them with controller functions
app.post('/users', userController.createUser); // Create a new user
//app.get('/users', userController.getAllUsers); // Get all users
app.get('/genrateOTP', userController.generateOTP);
app.listen(process.env.PORT || 5000)