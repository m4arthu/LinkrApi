import Joi from  "joi"

export const  ShareSchema = Joi.object({
    url: Joi.string().uri().required(),
    text: Joi.string().allow('')
});