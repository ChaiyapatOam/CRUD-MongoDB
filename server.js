const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
const bodyparser = require('body-parser')
const path = require(`path`)

const connectDB = require('./server/database/connection')

dotenv.config({path:`config.env`})
const PORT = process.env.PORT||3000

//log request
app.use(morgan('tiny'))

connectDB()

//parse request to bodyparser
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine','ejs')
//app.set('views',path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//load router
app.use('/',require('./server/routes/router'))

app.listen(3000,() => {
    console.log(`Server running at port ${PORT}`);
})