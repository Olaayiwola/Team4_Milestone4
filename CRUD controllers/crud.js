const Patient = require('../model/Patient')

async function newPatientRegistration (req, res) {
    const patient = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    try {
        const savedPatient = await patient.save();
        res.json(savedPatient)
    } catch (err) {
        res.json({message : err})
    }
}

module.exports = {newPatientRegistration}