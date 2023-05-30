const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);
const phone = Joi.string().max(10).min(10);
const email = Joi.string().email();
const password = Joi.string();
const dni = Joi.string();

const getCustomerSchema = Joi.object({
    id: id.required()
});

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: Joi.object({
        email: email.required(),
        password: password.required(),
        dni: dni.required()
    })
});

const updateCustomerSchema = Joi.object({
    userId: userId.required(),
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required()
})

module.exports = {getCustomerSchema, createCustomerSchema, updateCustomerSchema};