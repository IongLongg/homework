const Joi = require('joi')

module.exports.getById = (req, res, next) => {
    const idSchema = Joi.string().regex(/^[0-9]+$/).required()

    const options = {
        abortEarly: false, // include all errors
    }

    // validate request body against schema
    const { error } = idSchema.validate(req.params.id, options);
    
    if (error) {
        res.json({
            "status" : 400,
            "message" : `Validation error: ${error.details.map(x => x.message).join(', ')}`
        })
        return
    } 
    next()
}