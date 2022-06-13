const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

// const createPublisher= async function (req, res) {
//     let publisher = req.body
//     let authorCreated = await AuthorModel.create(publisher)
//     res.send({data: authorCreated})
// }
// const getPublisherData= async function (req, res) {
//     let published = await AuthorModel.find()
//     res.send({data: published})
// }

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
// module.exports.createPublisher= createPublisher
// module.exports.getPublisherData= getPublisherData