// const mongoose = require('mongoose');
// const authorModel = require("../models/authorModel")
const publish = require("../models/publisherModel")

const getPublish= async function (req, res) {
    let data= req.body
    let savedData = await publish.create(data)
    res.send({msg: savedData})
    // console.log(data2)
}

// const getAuthorsData= async function (req, res) {
//     let authors = await authorModel.find()
//     res.send({data: authors})
//     // console.log(data2)
// }

module.exports.getPublish = getPublish
// module.exports.getAuthorsData = getAuthorsData
// module.exports.getAllPublisher = getAllPublisher