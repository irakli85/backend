require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const declarationRoutes = require('./routes/declarations')

//express app
const app = express()
app.use(cors())
//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/declarations', declarationRoutes)

//connect to db

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// app.get('/', (req, res) => {
//     res.json({mssg : 'welcome'})
// })

