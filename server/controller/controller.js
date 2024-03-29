var Userdb = require('../model/model')
//create and save new user
exports.create=(req,res) => {
    if(!req.body){
        res.status(400).send({ message:"content can't empty"})
        return
    }

    const user = new Userdb({
        discord:req.params.id,
        name:req.body.name,
        age:req.body.age,
        mobile:req.body.mobile,
        email:req.body.email,
        nickname:req.body.nickname,
        interest:req.body.interest,
        experince:req.body.experince,
        goal:req.body.goal,
        courses:req.body.courses,
        stat:req.body.stat,
        coin:req.body.coin,
        code:req.body.code,
        remark:req.body.remark,
    })

    user
    .save(user)
    .then(data=>{
        res.send(data)
        res.redirect('/add-user')
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

        Userdb.findById(id)
        .then(data=> {
            if(!data){
                res.status(404).send({message:`Not found user with id  ${id}`})
            }else{
                res.send(data)
            }
                })
                .catch(err=> {
                    res.status(500).send({message:"Error retrieving with id" + id})
                })

    }else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message:err.message} || "Error Occurred User Information")
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
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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

exports.delete=(req,res)=>{
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Delete with id ${id} maybe id is wrong`})
        }else{
            res.send({
                message:"User was deleted successfully!!"
            })
        }
    })
    .catch(err=> {
        res.status(500).send({
            message:"Could not delete user with id  " + id
        })
    })
}