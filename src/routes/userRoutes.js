const express = require('express')
const userRouter = express.Router();
const { createUser } = require('../controllers/userController')


userRouter.post('/register', createUser)


module.exports = userRouter