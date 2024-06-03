const Joi= require('joi')

const id = Joi.number().integer();
const brand = Joi.string().min(1).max(50);
const model  = Joi.string().min(1).max(50);
const year = Joi.number()
const price = Joi.number()

const createCarSchema = Joi.object({
    brand : brand.required(),
    model: model.required(),
    year : year.required(),
    price: price.required()
})

const updateCarSchema = Joi.object({
    brand: brand,
    model: model,
    year: year,
    price: price
})

const getCarSchema = Joi.object({
    id : id.required()
})

module.exports = {
    createCarSchema,
    updateCarSchema,
    getCarSchema
}