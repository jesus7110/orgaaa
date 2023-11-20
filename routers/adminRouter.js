const router = require('express').Router()
const {adminSignup, adminLogin} = require('../controllers/adminController')

router.route('/registeradmin').post(adminSignup);
router.route('/loginadmin').post(adminLogin);

module.exports = router;