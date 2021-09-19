const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')
const coursecontrol = require('../controller/coursecontrol')
const newscontrol = require('../controller/newscontrol')
const shopcontrol = require('../controller/shopcontrol')
const appcontrol = require('../controller/appcontrol')


route.get('/',services.homeRoutes)
route.get('/add-user',services.add_user)
route.get('/courses',services.courses)
route.get('/news',services.news)
route.get('/shop',services.shop)
route.get('/app',services.app)


route.get('/update-user',services.update_user)
route.get('/update-courses',services.update_course)
route.get('/update-news',services.update_news)

//api post 
route.post('/api/users',controller.create)
route.post('/api/course',coursecontrol.create)
route.post('/api/news',newscontrol.create)
route.post('/api/shop',shopcontrol.create)
route.post('/api/app',appcontrol.create)

//api get
route.get('/api/users',controller.find)
route.get('/api/course',coursecontrol.find)
route.get('/api/news',newscontrol.find)
route.get('/api/shop',shopcontrol.find)
route.get('/api/app',appcontrol.find)

//api put
route.put('/api/users/:id',controller.update)
route.put('/api/course/:id',coursecontrol.update)
route.put('/api/news/:id',newscontrol.update)
route.put('/api/shop/:id',shopcontrol.update)
route.put('/api/app/:id',appcontrol.update)


route.delete('/api/users/:id',controller.delete)


module.exports = route