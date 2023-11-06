const router = require('express').Router();
const { addProduct } = require('../controllers/productController');

router.route('/addproduct')
    .post(addProduct);


module.exports = router;