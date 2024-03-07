const joi = require('joi');

const emailSchema = joi.string().email();

module.exports = {
  emailSchema,
};