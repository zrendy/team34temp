//env variables
require('dotenv').config()

//express app
const express = require('express')
const app = express()

//cors
// const cors = require('cors')
// app.use(cors())

//morgan (for logging)
const morgan = require('morgan')
app.use(morgan('dev'))

//path tool
const path = require('path')

//body parser
app.use(express.json())

//serve static files
app.use(express.static('../client/build'))

//routers
const users_router = require('./routes/users_router')
const locations_router = require('./routes/locations_router')


//routes
app.use('/users', users_router)
app.use('/locations', locations_router)

//handle 404
app.use('*', (req, res)=> {
    res.sendStatus(404)
})

//start express server
app.listen(process.env.PORT, ()=> {
    console.log('Server listening on PORT: ', process.env.PORT)
})