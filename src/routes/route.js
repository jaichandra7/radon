const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memes= require("../controllers/meme")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistrict)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/getWeather", weatherController.getWeather , weatherController.cities )
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistricts", CowinController.getDistrict)
router.post("/meme",memes.memes)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;