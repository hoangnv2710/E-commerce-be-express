const express = require('express')
const productRouter = express.Router();
const { createProduct } = require('../controllers/productController')

productRouter.post('/createProduct', createProduct)
module.exports = productRouter