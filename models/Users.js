const mongoose = require('../config/config')
module.exports = new mongoose.model("Users" , new mongoose.Schema({
    nome : String,
    idade : Number,
    email : String,
    senha : String
}) )

