import Joi from 'joi'

export const followSchema = Joi.object({
  followedUserId: Joi.number().integer().required()
})
