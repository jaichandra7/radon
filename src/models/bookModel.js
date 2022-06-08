const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");

const bookSchema = new mongoose.Schema(
    {
        bookName: { type: String, require: true },
        authorName: {type: String, require:true},
        tags: [String],
        year: { type:Number, default: 2021 },
        totalPages: Number,
        prices: {
            indianPrice: String,
            europeanPrice: String,
        },
        stockAvailable: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model("BookInfo", bookSchema);