const express = require('express')
const userRouter = express.Router();
const { register, login, addToCart } = require('../controllers/userController')


userRouter.post('/register', register)
userRouter.post('/login', login)

userRouter.get('/register', (req, res) => {
    return res.status(200).json({
        good: "hehe"
    })
})

userRouter.post('/cart', addToCart)

module.exports = userRouter