const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8).max(30);
const dni = Joi.string().min(7).max(11);
const role = Joi.string().min(5);

const getUserSchema = Joi.object({
    id: id.required()
});

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    dni: dni.required(),
    role: role.required()
});

const updateUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    dni: dni.required(),
    role: role.required()
});

module.exports = {getUserSchema, createUserSchema, updateUserSchema};