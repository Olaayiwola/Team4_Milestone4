const express = require('express')
const router = express.Router()

const Patient = require('../model/Patient')
const PatientTest  = require('../model/PatientTest')
const { newPatientRegistration } = require('../CRUD controllers/crud')

//Get all patients
router.get("/", async (req,res) =>{
    try {
        const patients = await Patient.find()
        res.json(patients)
    } catch (err) {
        res.json({message : err})
    }
})

// Add a new patient
router.post('/', newPatientRegistration)

// Find patient by ID
router.get('/:patientId', async (req, res) =>{
    try {
        const patient = await Patient.findById(req.params.patientId)
        res.json(patient)
    } catch (err) {
        res.json({message : err})
    }
})

//Get all tests
router.get('/all/tests', async (req,res) =>{
    try {
        const tests = await PatientTest.find()
        res.json(tests)
    } catch (err) {
        res.json({message : err})
    }
})


// Add test to patient by ID
router.post('/:patientId/tests', async (req, res) =>{
    const patientTest = new PatientTest({
        testUserID: req.params.patientId,
        testName: req.body.testName,
        testValue: req.body.testValue
    })
    try {
        const savedPatientTest = await patientTest.save();
        res.json(savedPatientTest)
    } catch (err) {
        res.json({message : err})
    }
})

// Find test by ID
router.get('/:testUserID/tests', async (req, res) =>{
    try {
        const patientTest = await PatientTest.find(req.params.patientId)
        res.json(patientTest)
    } catch (err) {
        res.json({message : err})
    }
})

module.exports =  router