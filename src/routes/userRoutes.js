const express = require('express');
const userRouter = express.Router();
const { register, login, addToCart, getUserCart, getUser, updateUser, uploadAvatar } = require('../controllers/userController');
const { uploadUser } = require('../middleware/multer')

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/:id', getUser)
userRouter.patch('/:id', updateUser)
userRouter.post('/avatar', uploadUser.single('image'), uploadAvatar)
userRouter.post('/cart', addToCart)

userRouter.get('/:id/cart', getUserCart)


module.exports = userRouter