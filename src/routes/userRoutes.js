const express = require('express');
const userRouter = express.Router();
const { register, login, addToCart, getUserCart, getUser, updateUser } = require('../controllers/userController');


userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/:id', getUser)
userRouter.patch('/:id', updateUser)
userRouter.post('/cart', addToCart)

userRouter.get('/:id/cart', getUserCart)

module.exports = userRouter