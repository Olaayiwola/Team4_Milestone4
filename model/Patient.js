const mongoose = require('mongoose')

const PatientSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
registrationDate:{
        type: String,
        default: Date.now,
    }
})

module.exports = mongoose.model('Patient',PatientSchema)