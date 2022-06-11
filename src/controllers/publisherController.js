// const mongoose = require('mongoose');
// const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({publisher: publisherCreated})
    // console.log(data2)
}

const getAuthorsData= async function (req, res) {
    let authors = await authorModel.find()
    res.send({data: authors})
    // console.log(data2)
}

module.exports.createPublisher = createPublisher
module.exports.getAuthorsData = getAuthorsData
// module.exports.getAllPublisher = getAllPublisher