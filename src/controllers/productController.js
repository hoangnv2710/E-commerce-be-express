const { createProductService, getAllProductsService, getCategoryService, getProductByIdService } = require('../services/productService')

const createProduct = async (req, res) => {
    // const imageUrl = `${req.protocol}://${req.get('host')}/uploads/products/${req.file.filename}`;
    const imageUrl = `http://10.0.2.2:8084/uploads/products/${req.file.filename}`
    try {
        const { name, price, description, quantity, category } = req.body;
        const productDetail = { name, price, description, quantity, category, imageUrl };
        const data = await createProductService(productDetail);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }

}

const getAllProducts = async (req, res) => {

    try {
        const data = await getAllProductsService();
        return res.status(200).json(data)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }

}

const getProductById = async (req, res) => {
    try {
        const data = await getProductByIdService(req.params.id);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }

}


const getCategory = async (req, res) => {

    try {
        const data = await getCategoryService(req.params.name);
        return res.status(200).json(data)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }

}



module.exports = {
    createProduct, getAllProducts, getCategory, getProductById
}