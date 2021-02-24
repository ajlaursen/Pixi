const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    photos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
        },
    ],

    total: {
        type: Currency,
    },

    creationDate: {
        type: Date,
        default: Date.now,
    },
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
