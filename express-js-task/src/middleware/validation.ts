import type { Request, Response, NextFunction } from 'express';
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required()
});

const validateSchema = (req:Request, res:Response, next:NextFunction)  => {
    const { error } = userSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            status: 400,
            message: error.details[0]?.message
        });
    }
    next();
}

module.exports = validateSchema;

