const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')
const patientRoutes  =  require('./routes/patients')
const testRoutes  =  require('./routes/test')

//Middleware
app.use(bodyParser.json())
app.use('/patients', patientRoutes)
app.use('/tests', testRoutes)

// Connect to mongo db
mongoose.connect(process.env.DATABASE_URL,{})
const db = mongoose.connection
db.on('error', (error) => (console.error(error)))
db.once('open',() => console.log("Connected to database"))

app.listen(3000)