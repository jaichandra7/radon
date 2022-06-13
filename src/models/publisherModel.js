const mongoose = require('mongoose');


const publisherSchema = new mongoose.Schema({
   
    publisherNAme: String,
    headQuarters: String,

}, 
    { timestamps : true });

module.exports = mongoose.model("newPublisher",publisherSchema )