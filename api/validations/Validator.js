const Joi = require('@hapi/joi');

const registrationValidator = data =>{
    const schema = Joi.object({
        'first_name': Joi.string().min(4).required(),
        'last_name': Joi.string().min(4).required(),
        'email': Joi.string().min(12).required().email(),
        'password': Joi.string().min(6).required()
    });
    return schema.validate(data);
}

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