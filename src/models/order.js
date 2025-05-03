const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
    user: {
        _id: { type: ObjectId, ref: 'User' },
        phone: String,
        address: String,
        name: String,
    },
    status: { type: String, default: 'packing', enum: ['packing', 'shipping', 'delivered', 'cancelled'] },
    items: [
        {
            product: {
                _id: { type: ObjectId, ref: 'Product' },
                name: String,
                price: Number,
                imageUrl: String,
            },
            quantity: Number,

        }
    ],
    totalPrice: Number,
    createdAt: { type: Date, default: Date.now }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order