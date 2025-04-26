const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createUserService = async (name, email, password) => {
    // console.log(name, email, password);
    try {
        let result = await User.create({
            name: name,
            password: password,
            email: email,
        })
        return result;
    }
    catch (error) {
        console.log(error);
        return null;
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
                return { token }
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

module.exports = {
    createUserService, userLoginService
}