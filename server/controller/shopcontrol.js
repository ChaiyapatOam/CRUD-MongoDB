const shopdb = require("../model/shop")

exports.create=(req,res) => {
    if(!req.body){
        res.status(400).send({ message:"content can't empty"})
        return
    }

    const shop = new shopdb({
        product:req.body.product,
        coin:req.body.coin,
        gallery:req.body.gallery,
    })

    shop
    .save(shop)
    .then(data=>{
        res.send(data)
        res.redirect('/add-shop')
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

        shopdb.findById(id)
        .then(data=> {
            if(!data){
                res.status(404).send({message:`Not found news with id  ${id}`})
            }else{
                res.send(data)
            }
                })
                .catch(err=> {
                    res.status(500).send({message:"Error retrieving with id" + id})
                })

    }else{
        shopdb.find()
        .then(news => {
            res.send(news)
        })
        .catch(err => {
            res.status(500).send({message:err.message} || "Error Occurred news Information")
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
    shopdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message:`Cannot update  with ${id} Maybe  not found`})
        }else{
            res.send(data)
            // console.log(req.params.id);
            // console.log(req.body);
        }
    })
    .catch(err=> {
        res.status(500).send({message:"Error Update  infomation"})
    })
}