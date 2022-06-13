const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel") 

const createBook=async function (req,res) {
    let data = req.body;
    let bookCreated =await bookModel.create(data);
    res.send(bookCreated);
}

const updateBook=async function (req,res){
    let update= await bookModel.findByIdAndUpdate({_id:req.body.book_id},{$set:{ isHardCover:req.body.isHardCover}},{upsert:true})
    res.send(update)
}

const getBooksData=async function (req,res){
    let books = await bookModel.find()
    res.send({data:books})
}
// const createBook= async function (req, res) {
//     let data = req.body;

//     if(!data.author) res.send("Author Id is mandatory");
//     let author = await authorModel.findById(data.author);
//     if (!author) res.send("Author Id not valid");

//     if (!data.publisher) res.send("Publisher is mandatory");
//     let publisher = await publisherModel.findById(data.publisher);
//     if (!publisher) res.send("Publisher is mandatory");

//     let bookCreated =await bookModel.create(data);
//     res.send(bookCreated);
// };
const getBooksWithAuthorDetails= async function (req, res) {
    let getBooks= await bookModel.find().populate("author_id").populate("publisher_id")
    res.send({data: getBooks})
}

const getBooksbyPublishers = async function (req, res) {
    let publisher = await publisherModel.find({name : {$in :["penguin" , "HarperCollins"]}}).select({_id:1});
    let x = publisher.map((ele)=>ele._id)
    let book = await bookModel.find({publisher: {$in : x}}).update({$set : {isHardcover :true}})
    let result =await bookModel.find({isHardcover : true}).populate(['author','publisher'])
    res.send(result)
};

const getAuthorsWithRatings = async function(req, res) {
    let authors = await authorModel.find({rating : {$gt :3.5}}).select({_id:1});
    let x =authors.map((ele)=>ele._id)
    let book = await bookModel.updateMany({author : {$in : x}},{$set : {$inc :{price : 10}}})
    let result = await bookModel.find({author : {$in : x}}).populate('author')
    res.send(result)
}


module.exports.createBook = createBook
module.exports.updateBook = updateBook
module.exports.getBooksData = getBooksData
module.exports.getBooksbyPublishers =getBooksbyPublishers
module.exports.getAuthorsWithRatings = getAuthorsWithRatings
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
