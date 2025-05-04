const Order = require('../models/order')
const { getCartByUserIdService, getUserByIdService } = require('../services/userService')

const createOrderService = async (userId, totalPrice) => {
    try {
        let cart = await getCartByUserIdService(userId);
        let user = await getUserByIdService(userId);
        let result = await Order.create({
            userId: user._id,
            userDetail: {
                name: user.name,
                address: user.address,
                phone: user.phone,
            },
            totalPrice: totalPrice,
            items: cart,
        })
        user.cart = [];
        user.save();
        // console.log("create order:", result)
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}
const getOrderByUserAndStatusService = async (userId, status) => {
    const result = Order.find({ userId, status })
    return result;
}

module.exports = {
    createOrderService, getOrderByUserAndStatusService
}