const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    quantity: Number,
})

const Product = mongoose.model('product', productSchema);

module.exports = Product