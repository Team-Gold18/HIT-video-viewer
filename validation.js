const Joi = require('@hapi/joi');


const registerValidation = data => {
    const schema = Joi.object({
        firstName: Joi.string().min(6).required(),
        lastName: Joi.string().min(6).required(),
        contactNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        isAdmin: Joi.boolean().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};


const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;