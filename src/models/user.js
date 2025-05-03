const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
    address: String,
    cart: [
        {
            productId: { type: ObjectId, ref: 'Product' },
            quantity: Number,
        }
    ],
});

module.exports = mongoose.model('User', userSchema);