const express = require('express');
const orderRouter = express.Router();
const { createOrder, getOrderByUserAndStatus } = require('../controllers/orderController')

// orderRouter.get('/', (req, res) => {
//     res.send("hello")
// })

orderRouter.get('/', getOrderByUserAndStatus)
orderRouter.post('/', createOrder)
module.exports = orderRouter;