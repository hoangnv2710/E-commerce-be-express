const express = require('express')
const multer = require('multer');
const path = require('path');
const productRouter = express.Router();
const { createProduct, getAllProducts, getCategory, getProductById, searchProduct } = require('../controllers/productController')
const upload = require('../middleware/multer')


productRouter.post('/', upload.single('image'), createProduct)
productRouter.get('/', getAllProducts)
productRouter.get('/category/:name', getCategory)
productRouter.get('/search/', searchProduct);
productRouter.get('/:id', getProductById)


// productRouter.get()
// productRouter.get() getCollection

// 
// productRouter.post('/upload', upload.single('image'), postImg);

module.exports = productRouter