const Appdb = require("../model/application")

exports.create=(req,res) => {
    if(!req.body){
        res.status(400).send({ message:"content can't empty"})
        return
    }

    const app = new Appdb({
        subject:req.body.subject,
        price:req.body.price,
        name:req.body.name,
        nick:req.body.nick,
        age:req.body.age,
        mobile:req.body.mobile,
        xp:req.body.xp,
    })

    app
    .save(app)
    .then(data=>{
        res.send(data)
        res.redirect('/add-app')
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

        Appdb.findById(id)
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
        Appdb.find()
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
    Appdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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