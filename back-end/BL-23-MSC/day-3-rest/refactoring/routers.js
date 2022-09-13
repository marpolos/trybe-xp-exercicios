const express = require('express');
const router = express.Router();

const error = require('./controllers/middlewares/error');

//Health Checker controller
router.use('/products', require('./controllers/productController'));
router.use(error);

module.exports = router;