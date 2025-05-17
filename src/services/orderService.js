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
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}
const getOrderByUserAndStatusService = async (userId, status) => {

    try {
        if (userId) {
            if (status) {
                const result = await Order.find({ userId, status });
                return result;
            } else {
                const result = await Order.find({ userId });
                return result;
            }
        }
        else {
            const result = await Order.find({});
            return result;
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

const getOrderByIdService = async (id) => {

    try {
        const result = await Order.findById(id)
        return result;
    } catch (error) {
        throw new Error(error.message)
    }
}

const updateStatusService = async ({ id, newStatus }) => {
    try {
        const order = await Order.findById(id)
        order.status = newStatus;
        order.save();
        return order;
    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createOrderService, getOrderByUserAndStatusService, updateStatusService, getOrderByIdService
}