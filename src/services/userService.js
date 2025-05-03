const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createUserService = async (name, email, password, phone, address) => {
    // console.log(name, email, password);
    try {
        let result = await User.create({
            name: name,
            password: password,
            email: email,
            phone: phone,
            address: address,
            cart: [],
        })
        return result;
    }
    catch (error) {
        throw new Error(error.message)
    }
}

const userLoginService = async (email, password) => {
    try {
        let result = await User.findOne({ email: email });
        if (result) {
            if ((password === result.password)) {
                const token = jwt.sign(
                    { email: email },
                    process.env.JWT_SECRET_KEY);

                const userData = result;
                return { token, userData }
            } {
                throw new Error("Invalid account or password")
            }

        } else {
            throw new Error("Invalid account or password")
        }

    }
    catch (error) {
        throw new Error(error.message)
    }
}

const addToCartService = async (data) => {
    const { userId, productId, quantity } = data;
    // console.log("cart:",data)
    try {
        let user = await User.findOne({ _id: userId });
        if (user) {
            const itemIndex = user.cart.findIndex(
                item => item.productId.toString() === productId.toString()
            )
            if (itemIndex > -1) {
                user.cart[itemIndex].quantity += +quantity;
                if (user.cart[itemIndex].quantity < 1) {
                    // const newCart = user.cart.filter(item => item.productId != productId);
                    // user.cart = newCart;
                    user.cart.splice(itemIndex, 1);
                }
            } else {

                user.cart.push({ productId, quantity });
            }
            await user.save();
            return { success: true, user };
        } else {
            throw new Error("Wrong user's Id")
        }
    }
    catch (error) {
        throw new Error(error.message)
    }
}

const getCartByUserIdService = async (userId) => {
    try {
        const user = await User.findById(userId).populate('cart.productId', 'name price imageUrl');
        return user.cart.map(item => ({
            product: item.productId,
            quantity: item.quantity,
        }));
    } catch (error) {
        throw new Error(error.message)
    }
}

const getUserByIdService = async (userId) => {
    try {
        const user = await User.findById(userId);
        return user
    } catch {
        throw new Error(error.message)
    }
}


module.exports = {
    createUserService, userLoginService, addToCartService, getCartByUserIdService, getUserByIdService
}