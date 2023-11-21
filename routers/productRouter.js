const router = require('express').Router();
const { addProduct, getallProduct, getProductById, updateProduct, deleteProduct,searchProducts,
    getProductsByCategory, getProductsByPriceRange, getProductCount, getFeaturedProducts, getNewestProducts,
    getTopSellingProducts } = require('../controllers/productController');

const { authenticateToken, authorizeAdmin } = require ('../middlewares/authMiddleware')
const upload = require('../middlewares/imageupload')


//router.route('/addproduct')
//    .post(upload.single('avatar'),addProduct);

router.post('/addproduct',authenticateToken,authorizeAdmin,upload.single('image'),addProduct)

router.route('/getallproduct')
    .post(getallProduct);

// Route for getting a product by its ID
//localhost:5000/api/product/product/123 - sample
router.route('/product/:id')
.get(getProductById);


// Route for updating a product by its ID
router.route('/product/:id')
  .put(authenticateToken,authorizeAdmin,updateProduct); // Using the PUT method for updating a product


  // Route for deleting a product by its ID
router.route('/product/:id')
.delete(authenticateToken,authorizeAdmin,deleteProduct); // Using the DELETE method for deleting a product

// Route for searching products by name or category
router.route('/searchProducts')
.get(searchProducts);

// Route for getting products by category
router.route('/getProductsByCategory/:category')
  .get(getProductsByCategory);

// Route for getting products by price range
router.route('/getProductsByPriceRange')
  .get(getProductsByPriceRange);

// Route for getting the total number of products
router.route('/getProductCount')
  .get(getProductCount);

// Route for getting featured products
router.route('/getFeaturedProducts')
  .get(getFeaturedProducts);

// Route for getting the newest products
router.route('/getNewestProducts')
  .get(getNewestProducts);

// Route for getting top-selling products
router.route('/getTopSellingProducts')
  .get(getTopSellingProducts);

module.exports = router;