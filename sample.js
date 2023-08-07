const Joi = require('joi');
const validateInput = require('./validate');

module.exports = {
    validateRequest: async (req) => {
        const bodyParams = req.body;
        let errorMsg = [];

        const bodySchema = Joi.object({
            context: validateInput.validateString('Context'),
            context_id: validateInput.validateId('Context ID'),
            to_uuid: validateInput.validateNumberArray('To UUID'),
            notification: validateInput.validateString('Notification'),
            click_action_url: validateInput.validateString('Click Action URL'),
            service: validateInput.validateString('Service')
        });
        // schema options
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };

        // validate request body against schema
        const bodyParamsValidation = bodySchema.validate(bodyParams, options);

        if (bodyParamsValidation.error) {
            // on fail return comma separated errors
            errorMsg = bodyParamsValidation.error.details.map(x => x.message.replace(/\t/g, ""));
        }
        return {error: errorMsg};
    }
};