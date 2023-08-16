import Joi from  "joi"

export const  LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const RegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    pictureUrl: Joi.string().required(),
});