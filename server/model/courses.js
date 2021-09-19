const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    cover:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    startdate:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    length:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    },
    gallery:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
    no:{
        type:String,
        required:true
    }

})

const Courses = mongoose.model('Courses',schema)

module.exports = Courses