const path = require('path')
const env = require('dotenv')
env.config()
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const mongoose = require('mongoose')

const { MONGO_URI } = process.env
mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Successfully connected to database")
})
.catch((error) => {
    console.log("Database connected failed. exitiong now...")
    console.error(error)
    process.exit(1)
})

const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cors({origin:'http:/localhost:3000'}))

const apiRoutes = require('./routes/api')
app.use('/api/v1', apiRoutes)

app.listen(process.env.PORT)
console.log('App listening on port' + process.env.PORT)