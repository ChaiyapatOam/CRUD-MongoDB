const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
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
    email:{
        type:String,
        required:true,
        unique:true
    },
    nickname:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    experince:{
        type:String,
        required:true
    },
    goal:{
        type:String,
        required:true
    },
    courses:{
        type:Array,
        "default":[]
    },
    stat:[{
    }],
    coin:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    },
    // gender:String,
    // status:String
})

const Userdb = mongoose.model('userdb',schema)

module.exports = Userdb