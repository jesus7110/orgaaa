const { Product } = require('../models/productModel');

module.exports.addProduct = async (req, res) => {
  const product = await Product.findOne({
    productid: req.body.productid
  });
  if (product) return res.status(400).send("Product already exists!");
  
  
  
  return res.status(200).send("Product Saved successfully!");
}