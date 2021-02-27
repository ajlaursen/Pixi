const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is Required',
    },

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
