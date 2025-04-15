const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    quantity: Number,
    description: String,
    price: Number,
})

const Product = mongoose.model('product', productSchema);

module.exports = Product