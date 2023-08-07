const Joi = require('joi');

module.exports = {
    validateId,
    validateString,
    validateNumberArray
}

function validateId(param) {
    return Joi.number().required().messages({
        'number.base': `Invalid ${param}`,
        'number.empty': `${param} cannot be empty`,
        'any.required': `${param} is required`,
    })
}

function validateString(paramName) {
    return Joi.string().required().messages({
        'any.required': `${paramName} is required`,
        'string.empty': `${paramName} cannot be empty`
    })
}

function validateNumberArray(paramName) {
    return Joi.array().items(Joi.number().strict().messages({
        'number.base': `${paramName} is Invalid`
    })).min(1).required().messages({
        'array.empty': `${paramName} cannot be empty`,
        'array.min': `${paramName} cannot be empty`,
        'array.required': `${paramName} is required`,
        'any.required': `${paramName} is required`,
        'array.base': `${paramName} must be an array`
    })
}