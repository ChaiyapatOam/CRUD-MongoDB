const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    nick:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    xp:{
        type:String,
        required:true,
    },

})

const Appdb = mongoose.model('Appdb',schema)

module.exports = Appdb