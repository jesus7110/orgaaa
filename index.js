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
app.listen(3000)
