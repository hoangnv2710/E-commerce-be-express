const express = require('express');
const orderRouter = express.Router();
const { createOrder } = require('../controllers/orderController')

orderRouter.get('/', (req, res) => {
    res.send("hello")
})

orderRouter.post('/', createOrder)
module.exports = orderRouter;