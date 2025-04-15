const Product = require('../models/product')

const postCreateProductAPI = async (req, res) => {
    console.log(req.body);
    const { name, quantity, description, price } = req.body;
    await Product.create({
        name: name,
        quantity: quantity,
        description: description,
        price: price
    })

    return res.send('done')

}

module.exports = { postCreateProductAPI }