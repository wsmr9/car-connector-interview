const Joi = require('joi');

// Define validation rules for the 'id' field
const id = Joi.number().integer();

// Define validation rules for the 'brand' field
const brand = Joi.string().min(1).max(50);

// Define validation rules for the 'model' field
const model = Joi.string().min(1).max(50);

// Define validation rules for the 'year' field
const year = Joi.number();

// Define validation rules for the 'price' field
const price = Joi.number();

// Schema to validate data for creating a new car
const createCarSchema = Joi.object({
    brand: brand.required(),  // 'brand' is required for creating a car
    model: model.required(),  // 'model' is required for creating a car
    year: year.required(),    // 'year' is required for creating a car
    price: price.required()   // 'price' is required for creating a car
});

// Schema to validate data for updating an existing car
const updateCarSchema = Joi.object({
    brand: brand,  // All fields are optional for updates
    model: model,
    year: year,
    price: price
});

// Schema to validate the 'id' parameter for retrieving a single car
const getCarSchema = Joi.object({
    id: id.required()  // 'id' is required for fetching a car
});

module.exports = {
    createCarSchema,
    updateCarSchema,
    getCarSchema
};
