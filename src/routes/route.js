const express = require('express');
const router = express.Router();
const middleware= require("../middleware/middleware")
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct )

router.get("/getProduct", productController.getProduct  )

router.post("/createUser",middleware.isFreeAppUser,userController.createUser )

router.post("/createOrder",middleware.isFreeAppUser,orderController.createOrder )

module.exports = router;