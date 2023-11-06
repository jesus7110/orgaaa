const express = require('express')
require('dotenv').config();
const connectDB = require("./config/database");
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter')
const app = express()

//server start test
app.get('/', function (req, res) {
  res.send('Server running');
})
//mongoDB connectiongit
connectDB();

//middlewares
app.use(express.json());

//router
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)


app.listen(process.env.PORT || 5000)