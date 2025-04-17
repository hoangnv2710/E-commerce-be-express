const Product = require('../models/product')

const createProductService = async (data) => {
    try {
        let result = await Product.create(data
        )
        return result;
    } catch (error) {
        throw new Error(error.message)
    }

}

module.exports = {
    createProductService
}