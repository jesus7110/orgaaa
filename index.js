const express = require('express')
require('dotenv').config();
const connectDB = require("./config/database");
const userRouter = require('./routers/userRouter')
const app = express()

//server start test
app.get('/', function (req, res) {
  res.send('Server running');
})
//mongoDB connectiongit
connectDB();



app.listen(process.env.PORT || 5000)