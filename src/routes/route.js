const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/movies", function(req,res){
    let movies =[
        "Rang de Basanti",
        "The Shining",
        "Lord of the rings",
        "Batman begins",
    ];
    
    res.send(movies);
});

router.get("/movies/:indexNumber", function (req,res){
    let movies =[
        "Rang de Basanti",
        "The Shining",
        "Lord of the rings",
        "Batman begins",
    ];

    let index =req.params.indexNumber;
    if (!movies[index]){
        res.send("please enter valid index number");
    }
    res.send(movies[index]);
});


router.get("/films", function(req,res){
    let films = [
        { id : 1, name: "The Shining" },
        { id : 2, name: "Incendies" },
        { id : 3, name: "Rang de Basanti" },
        { id : 4, name: "Finding Nemo" },
    ]
    res.send(films);
});



router.get("/films/:filmid",function(req,res){
    let films = [
        {id: 1, name:"The Shining"},
        {id: 2, name:"Incendies"},
        {id: 3, name:"Rang de Basanti"},
        {id: 4, name:"Finding Nemo"},
    ];
    const input = req.params.filmid;
    const result = films.find((ele) => ele.id == input );
    if (result === undefined){
        res.send("No movie exists with this id")
    }
    res.send(result);
})





router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;