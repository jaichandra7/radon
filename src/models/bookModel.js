const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number,
    isHardcover : {type: Boolean, default: false}


}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema)
