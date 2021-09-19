const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    cover:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    gallery:{
        type:Array,
        "default" : []
    },
    
})

const newsdb = mongoose.model('newsdb',schema)

module.exports = newsdb