const router = require('express').Router();
const { addProduct, getallProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/addproduct')
    .post(addProduct);

router.route('/getallproduct')
    .post(getallProduct);

// Route for getting a product by its ID
//localhost:5000/api/product/product/123 - sample
router.route('/product/:id')
.get(getProductById);


// Route for updating a product by its ID
router.route('/product/:id')
  .put(updateProduct); // Using the PUT method for updating a product


  // Route for deleting a product by its ID
router.route('/product/:id')
.delete(deleteProduct); // Using the DELETE method for deleting a product

module.exports = router;