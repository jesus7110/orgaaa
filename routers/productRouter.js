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

module.exports = router;