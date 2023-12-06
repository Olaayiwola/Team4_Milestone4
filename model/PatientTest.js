const mongoose = require('mongoose')


const PatientTestSchema = mongoose.Schema({
    testUserID:{
        type: String,
        required: true
    },
    testName:{
        type: String,
        required: true
    },
    testValue:{
        type: String,
        required: true
    },
testTakenOn:{
        type: String,
        default: Date.now,
    }
})

module.exports = mongoose.model('PatientTest',PatientTestSchema)