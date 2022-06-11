const mongoose = require('mongoose');
const Objectid = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema({
   
    publisherNAme: String,
    headQuarters: String,

}, 
    { timestamps : true });

module.exports = mongoose.model('publishers',publisherSchema )