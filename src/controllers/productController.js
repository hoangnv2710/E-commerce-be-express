const { createProductService } = require('../services/productService')

const createProduct = async (req, res) => {
    // const { name, quantity, description, price } = req.body;
    try {
        const data = await createProductService(req.body);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }

}

module.exports = {
    createProduct,
}