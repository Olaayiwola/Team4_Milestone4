const{newPatientRegistration} = require('../../CRUD controllers/crud')

const req = {
    body: {
        firstName: 'dummy',
        lastName: 'name'
    }
}
const res = {
    json: jest.fn((x) => x)
}

it('should create a new patient object with input from the body of req', () =>{
    
    newPatientRegistration(req, res);
} )