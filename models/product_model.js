const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
   
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});




// Modelling the Schema
const Product_model = mongoose.model('Products', productSchema);


module.exports = Product_model;