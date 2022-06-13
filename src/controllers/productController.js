// const mongoose = require('mongoose');

const productModel = require("../models/productModel")

const createProduct= async function (req, res) {
    let product = req.body
    let productCreated = await productModel.create(product)
    res.send(productCreated)
    // console.log(data2)
}

const getProduct = async function (req, res) {
    let allProducts = await productModel.find()
    res.send(allProducts)
    // console.log(data2)
}

module.exports.createProduct = createProduct
module.exports.getProduct = getProduct
// module.exports.getAllPublisher = getAllPublisher