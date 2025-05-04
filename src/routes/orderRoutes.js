const express = require('express');
const orderRouter = express.Router();
const { createOrder, getOrderByUserAndStatus, updateStatus, getOrderById } = require('../controllers/orderController')

// orderRouter.get('/', (req, res) => {
//     res.send("hello")
// })

orderRouter.get('/:id', getOrderById)
orderRouter.get('/', getOrderByUserAndStatus)

orderRouter.post('/', createOrder)
orderRouter.patch('/update-status', updateStatus)

module.exports = orderRouter;