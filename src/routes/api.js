const express = require('express')
const routerAPI = express.Router();
const { createUser } = require('../controllers/userController')


routerAPI.post('/register', createUser)

routerAPI.get('/register', (req, res) => {
    console.log(">>>")
    // res.send('waa')
    return res.status(200).json({
        status: true,

    });
})

routerAPI.get('/he', (req, res) => {
    console.log(">>>")
    res.send('waa')
})

module.exports = routerAPI