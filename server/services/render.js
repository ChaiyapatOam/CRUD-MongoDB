const axios = require('axios')


exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index',{users:response.data})
        })
        .catch(err =>{
            res.send(err)
        })

}

exports.add_user= (req,res) => {
    res.render('add_user')
}

exports.update_user = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err=> {
        res.send(err)
    })
}

exports.courses = (req,res) => {
    axios.get('http://localhost:3000/api/course')
        .then(function(response){
            res.render('courses',{course:response.data})
        })
        .catch(err =>{
            res.send(err)
        })
}
exports.update_course = (req,res) => {
    axios.get('http://localhost:3000/api/course',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_course",{course:userdata.data})
    })
    .catch(err=> {
        res.send(err)
    })
}

exports.news = (req,res) => {
    axios.get('http://localhost:3000/api/news')
        .then(function(response){
            res.render('news',{news:response.data})
        })
        .catch(err =>{
            res.send(err)
        })
}
exports.update_news = (req,res) => {
    axios.get('http://localhost:3000/api/news',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_news",{news:userdata.data})
    })
    .catch(err=> {
        res.send(err)
    })
}
exports.shop = (req,res) => {
    axios.get('http://localhost:3000/api/shop')
        .then(function(response){
            res.render('shop',{shop:response.data})
        })
        .catch(err =>{
            res.send(err)
        })
}

exports.app = (req,res) => {
    axios.get('http://localhost:3000/api/app')
        .then(function(response){
            res.render('app',{app:response.data})
        })
        .catch(err =>{
            res.send(err)
        })
}