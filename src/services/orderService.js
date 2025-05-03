const Order = require('../models/order')
const { getCartByUserIdService, getUserByIdService } = require('../services/userService')

const createOrderService = async (userId, totalPrice) => {
    try {
        let cart = await getCartByUserIdService(userId);
        let user = await getUserByIdService(userId);
        let result = await Order.create({
            user: {
                _id: user._id,
                name: user.name,
                address: user.address,
                phone: user.phone,
            },
            totalPrice: totalPrice,
            items: cart,
        })
        console.log("create order:", result)
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    createOrderService
}