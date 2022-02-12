const Joi = require('@hapi/joi')

const userValidateSchema = Joi.object({
 userName:Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
})

module.exports = {
    userValidateSchema,
}
// public token 
