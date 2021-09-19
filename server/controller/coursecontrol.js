const Courses = require('../model/courses')
var courses = require('../model/courses')

exports.create=(req,res) => {
    if(!req.body){
        res.status(400).send({ message:"content can't empty"})
        return
    }

    const course = new Courses({
        cover:req.body.cover,
        subject:req.body.subject,
        name:req.body.name,
        tag:req.body.tag,
        price:req.body.price,
        startdate:req.body.startdate,
        age:req.body.age,
        length:req.body.length,
        detail:req.body.detail,
        date:req.body.date,
        time:req.body.time,
        remark:req.body.remark,
        gallery:req.body.gallery,
        coin:req.body.coin,
        code:req.body.code,
        remark:req.body.remark,
        gallery:req.body.gallery,
        icon:req.body.icon,
        no:req.body.no,
    })

    course
    .save(course)
    .then(data=>{
        res.send(data)
        res.redirect('/add-course')
    })
    .catch(err => {
        res.status(500).send({
            message:err.message||"Some Error occurred"
        })
    })
}

exports.find=(req,res)=>{

    if(req.query.id){
        const id = req.query.id

        Courses.findById(id)
        .then(data=> {
            if(!data){
                res.status(404).send({message:`Not found course with id  ${id}`})
            }else{
                res.send(data)
            }
                })
                .catch(err=> {
                    res.status(500).send({message:"Error retrieving with id" + id})
                })

    }else{
        Courses.find()
        .then(course => {
            res.send(course)
        })
        .catch(err => {
            res.status(500).send({message:err.message} || "Error Occurred course Information")
        })
    }
}

exports.update=(req,res)=>{
    if(!req.body) {
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }

    const id = req.params.id
    Courses.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id} Maybe user not found`})
        }else{
            res.send(data)
            // console.log(req.params.id);
            // console.log(req.body);
        }
    })
    .catch(err=> {
        res.status(500).send({message:"Error Update user infomation"})
    })
}