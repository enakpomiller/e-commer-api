//const {string} = require('joi');
const joi = require('joi');


const validator = (schema) => (payload) =>
schema.validate(payload, {abortEarly: false}) // payload for create user schema

const CreateUserSchema = joi.object({
   name:joi.string().required(),
   country:joi.string().required(),
   email:joi.string().required(),
   password:joi.string().required(),
   userfile:joi.string().required(),
   verify_code:joi.string().required(),
   date:joi.string().required()

 });




 exports.validatecreateuser = validator(CreateUserSchema);