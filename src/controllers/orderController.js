const { createOrderService, getOrderByUserAndStatusService } = require("../services/orderService");

const createOrder = async (req, res) => {
    // console.log(req.body);
    const { userId, totalPrice } = req.body;
    try {
        const data = await createOrderService(userId, totalPrice);
        res.status(200).json(data)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

const getOrderByUserAndStatus = async (req, res) => {
    const { userId, status } = req.query;
    console.log(req.query)
    try {
        const data = await getOrderByUserAndStatusService(userId, status);
        res.status(200).json(data)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

module.exports = {
    createOrder, getOrderByUserAndStatus
}