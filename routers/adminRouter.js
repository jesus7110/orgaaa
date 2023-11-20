const router = require('express').Router()
const {adminSignup, adminLogin} = require('../controllers/adminController')

router.route('/register').post(adminSignup);
router.route('/login').post(adminLogin);

module.exports = router;