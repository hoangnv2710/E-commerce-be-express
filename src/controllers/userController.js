const { createUserService, userLoginService, addToCartService, getCartByUserIdService, getUserByIdService, updateUserService } = require('../services/userService')

const register = async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    const data = await createUserService(name, email, password, phone, address);
    return res.status(200).json(data)
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const data = await userLoginService(email, password);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: error.message })
    }

}

const addToCart = async (req, res) => {
    try {
        const data = await addToCartService(req.body);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: error.message })
    }
}

const getUserCart = async (req, res) => {

    try {
        const data = await getCartByUserIdService(req.params.id);
        // console.log(data);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const data = await getUserByIdService(req.params.id);
        // console.log(data);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    const { name, email, password, phone, address, imageUrl } = req.body;
    console.log(req.body)
    try {
        const data = await updateUserService(req.params.id, name, email, password, phone, address, imageUrl);
        // console.log(data);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: error.message })
    }
}
const uploadAvatar = async (req, res) => {
    const imageUrl = `uploads/users/${req.file.filename}`
    try {
        return res.status(200).json(imageUrl)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }

}



module.exports = {
    register, login, addToCart, getUserCart, getUser, updateUser, uploadAvatar
}