const mongoose = require('mongoose');
// const Objectid = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
   
    name: String,
    category: String,
    price: {
        type: Number,
        required: true,
    }

}, 
    { timestamps : true });

module.exports = mongoose.model('product',productSchema)