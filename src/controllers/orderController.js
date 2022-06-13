const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel") 
const moment =require("moment");

const createOrder= async function (req, res) {
    req.body["isFreeAppUser"] = req.isFreeAppUser;
    let data = req.body;

    if(!data.userId) res.send("please enter the user ID");
    let user = await userModel.findById(data.userId);
    if (!user) res.send("user Id not valid");

    if (!data.productId) res.send("please enter the product ID");
    let product = await productModel.findById(data.product);
    if (!product) res.send("Product ID is not valid");

    if(data.isFreeAppUser === "true"){
        amount = 0;
    } else {
        amount = product.price;
    }

    const date = new Date();

    if  (amount > userModel.balance) res.send(" You have Insufficient Balance ")
    else {
        user = await userModel.findById(data.userId).updateOne({$inc: { balance: -amount}});
    data["amount"] = amount;

    data["date"] = date.toLocaleDateString("en-us");

    let savedData =await orderModel.create(data);
    res.send(savedData);
    }
};
const getOrder= async function (req, res) {
    let allOrders = await orderModel.find();
    res.send(allOrders)
}

module.exports.createOrder = createOrder
module.exports.getOrder = getOrder
