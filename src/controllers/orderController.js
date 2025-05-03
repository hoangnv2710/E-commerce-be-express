const { createOrderService } = require("../services/orderService");

const createOrder = (req, res) => {
    // console.log(req.body);
    const { userId, totalPrice } = req.body;
    createOrderService(userId, totalPrice);
    res.send(">>>>")
}

module.exports = {
    createOrder
}