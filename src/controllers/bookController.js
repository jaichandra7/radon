const bookModel = require("../models/bookModel");

const createBook = async function(req, res) {
    let data = req.body;
    let savedData = await bookModel.create(data);
    res.send({msg: savedData });
};

const getBooksData = async function (req, res){
    let allBooks = await bookModel.find().select({
        bookName: 1,
        authorName: 1,
        _id: 0,
    });
    res.send({msg: allBooks });
};

const getBooksInYear = async function(req,res) {
    let publishedYear = req.body.year;
    let booksWithYear = await bookModel.find({ year: publishedYear });
    res.send(booksWithYear);
};

const getParticularBooks = async function (req, res) {
    let particularBook = req.body;
    console.log(particularBook);
    let myBook = await bookModel.find({ bookName : particularBook.bookName });
    res.send(myBook);
};

const getXINRBooks = async function(req, res) {
    let getINBooks = await bookModel.find({
        "prices.indianPrice": { $in: ["100INR" , "200INR" , "500INR"]  }
    });
    res.send(getINBooks);
};

const getRandomBooks = async function(req,res){
    let randomBooks = await bookModel.find({
        $or: [{ stockAvailable: true }, { totalPages: {$gt: 500} }],
    });
    res.send(randomBooks);
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;