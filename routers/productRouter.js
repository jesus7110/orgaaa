const router = require('express').Router();
const { addProduct, getallProduct } = require('../controllers/productController');

router.route('/addproduct')
    .post(addProduct);

router.route('/getallproduct')
    .post(getallProduct);


module.exports = router;