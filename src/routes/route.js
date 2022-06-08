const express = require('express');
const router = express.Router();
// const Bookmodel = require("../models/userModel.js")
// const userController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.get("/Books", function(req,res) {
//     res.send(" The great Books ")
// });

router.post("/createBook", BookController.createBook);
router.get("/getBooksData", BookController.getBooksData);
router.get("/getXINRBooks", BookController.getXINRBooks);
router.post("/getBooksInYear", BookController.getBooksInYear);
router.get("/getParticularBooks", BookController.getParticularBooks);
router.get("/getRandomBooks", BookController.getRandomBooks);

module.exports = router;

// router.post("/bookSchema", BookController.createBook)

// router.get("/listbooks", BookController.getBooksData)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)
 
