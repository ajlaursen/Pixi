const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    creationDate: {
        type: Date,
        default: Date.now,
    },
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
