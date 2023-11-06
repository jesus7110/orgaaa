const { product } = require('../models/productModel');

/*
module.exports.addProduct = async (req, res) => {
  const product = await Product.findOne({
    productid: req.body.productid
  });
  if (product) return res.status(400).send("Product already exists!");
  const result = await product.save();
  
  
  return res.status(200).send("Product Saved successfully!");
}
*/

// Function to add a product to the database
const addProduct = async (req, res) => {
  try {
    const newProductData = req.body; // Assuming the product data is in the request body

    const existingProduct = await product.findOne({ productid: newProductData.productid });

    if (existingProduct) {
      return res.status(400).json({ success: false, message: 'Product with the same productID already exists.' });
    }

    const createdProduct = await product.create(newProductData);

    return res.status(201).json({ success: true, message: 'Product added successfully', data: createdProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while adding the product.', error });
  }
};

const getallProduct = async (req, res) => {
  try {
    const allProducts = await product.find();

    return res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while fetching products.', error });
  }
};


module.exports = {
  addProduct, getallProduct
};