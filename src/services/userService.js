const User = require('../models/user')

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

module.exports = {
    createUserService
}