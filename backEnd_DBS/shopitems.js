const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true,
        unique: true,
        index: true,
        autoIncrement: true,
        min: 1,
        max: 999999,
    },
    category: {
        type: String,
        required: true
    },
    unitOfMeasure: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // Add other fields as needed
});

module.exports = mongoose.model('Item', ItemSchema);