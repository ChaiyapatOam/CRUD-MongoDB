const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    coin:{
        type:Number,
        required:true
    },
    gallery:{
        type:Array,
        "default" : []
    },
    
})

const shopdb = mongoose.model('shopdb',schema)
module.exports = shopdb