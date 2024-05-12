const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isTaken: {
        type: Boolean,
        default: false
    },
    image: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;