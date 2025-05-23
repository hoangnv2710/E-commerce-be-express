const Product = require('../models/product');
const { createProductService, getAllProductsService, getCategoryService, getProductByIdService, updateProductService } = require('../services/productService')

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

const uploadImage = async (req, res) => {
    const imageUrl = `http://10.0.2.2:8084/uploads/products/${req.file.filename}`
    try {
        return res.status(200).json(imageUrl)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    // const imageUrl = `${req.protocol}://${req.get('host')}/uploads/products/${req.file.filename}`;
    const id = req.params.id;
    const { name, price, description, quantity, category, imageUrl } = req.body;
    try {

        const data = await updateProductService(id, name, price, description, quantity, category, imageUrl);
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

const searchProduct = async (req, res) => {
    try {
        const keyword = req.query.q;
        const regex = new RegExp(keyword, 'i');
        const data = await Product.find({
            name: { $regex: regex }
        });
        return res.status(200).json(data)
    }
    catch (error) {
        console.log("error >>>:", error);
        return res.status(500).json({ message: error.message })
    }
}



module.exports = {
    createProduct, getAllProducts, getCategory, getProductById, searchProduct, uploadImage, updateProduct
}