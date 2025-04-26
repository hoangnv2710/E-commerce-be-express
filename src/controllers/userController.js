const { createUserService, userLoginService } = require('../services/userService')
const register = async (req, res) => {
    // console.log("check body", req.body);
    const { name, email, password } = req.body;
    const data = await createUserService(name, email, password);
    return res.status(200).json(data)
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await userLoginService(email, password);
        return res.status(200).json(data)
    }
    catch (error) {
        return res.status(401).json({ message: error.message })
    }

}

module.exports = {
    register, login
}