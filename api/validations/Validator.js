const Joi = require('@hapi/joi');

// SCHEMA DEFINITION TO VALIDATE REGISTRATION POST FIELDS DATA
const registrationValidator = data =>{
    const schema = Joi.object({
        'first_name': Joi.string().min(4).required(),
        'last_name': Joi.string().min(4).required(),
        'email': Joi.string().min(12).required().email(),
        'password': Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// SCHEMA DEFINITION TO VALIDATE LOGIN POST FIELDS DATA
const loginValidator = data => {
    const schema = Joi.object({
        'email': Joi.string().min(12).required().email(),
        'password': Joi.string().min(6).required()
    });
    return schema.validate(data);
}

module.exports = {
    registrationValidator: registrationValidator,
    loginValidator: loginValidator
}