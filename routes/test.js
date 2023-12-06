const express = require('express')
const router = express.Router()

const PatientTest  = require('../model/PatientTest')


//Get all tests
router.get('/', async (req,res) =>{
    try {
        const tests = await PatientTest.find()
        res.json(tests)
    } catch (err) {
        res.json({message : err})
    }
})
module.exports =  router