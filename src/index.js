const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://jaichandra:9908078754b@cluster0.pwobr.mongodb.net/jaichandra7-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const assignmentMW = function (req, res, next) {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     let dateTime = date+' '+time;
    //  console.log(dateTime)
     let ip =req.ip
    //  console.log(ip)
     let url = req.originalUrl
    //  console.log(url)
     console.log( `${dateTime} ${ip} ${url}` )
     
     next()
}

app.use (assignmentMW)

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
