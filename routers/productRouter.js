const router = require('express').Router();
const { addProduct, getallProduct, getProductById } = require('../controllers/productController');

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
  .put(productController.updateProduct); // Using the PUT method for updating a product

module.exports = router;