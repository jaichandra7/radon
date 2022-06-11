const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {

    author_name: String,
    age:Number,
    address:String,
    rating:String,

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
