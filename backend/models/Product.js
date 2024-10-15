const mongoose = require('mongoose');

// Product Schema
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false }, // Optional field for basic products
    imageUrl: { type: String, required: false }     // Optional field for basic products
});

module.exports = mongoose.model('Product', ProductSchema);
