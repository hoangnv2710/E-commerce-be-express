const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    cart: [
        {
            productId: { type: ObjectId, ref: 'Product' },
            quantity: Number,
        }
    ],
});

module.exports = mongoose.model('User', userSchema);