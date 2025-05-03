const Product = require('../models/product')

const createProductService = async (data) => {

    //     res.json({ message: 'Upload thành công', imageUrl });

    try {
        let result = await Product.create(data
        )
        return result;
    } catch (error) {
        throw new Error(error.message)
    }

}

const getAllProductsService = async () => {
    try {
        let result = await Product.find();
        return result;
    } catch (error) {
        throw new Error(error.message)
    }

}

const getProductByIdService = async (id) => {
    try {
        let result = await Product.findOne({ _id: id });
        return result;
    } catch (error) {
        throw new Error(error.message)
    }

}

const getCategoryService = async (name) => {
    console.log(name);
    try {
        let result = await Product.find({ category: name });
        return result;
    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createProductService, getAllProductsService, getCategoryService, getProductByIdService
}