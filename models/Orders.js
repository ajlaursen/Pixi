const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

const ordersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    photos: [
        {
            type: Schema.Types.ObjectId,
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
