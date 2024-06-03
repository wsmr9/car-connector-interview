const express = require('express');

// Import the validator middleware
const validatorHandler = require('./../middlewares/validator.handler');

// Import validation schemas for car operations
const { 
    createCarSchema,
    getCarSchema,
    updateCarSchema
} = require('./../schemas/car.schema');

// Import the car controller that handles business logic
const CarController = require('../controllers/car.controller');

// Create a router for car-related routes
const router = express.Router();

// Route to get all cars
router.get('/', CarController.getCars);

// Route to get a specific car by id
router.get('/:id',
  validatorHandler(getCarSchema, 'params'), // Validate 'id' in params
  CarController.getCar
);

// Route to create a new car
router.post('/',
  validatorHandler(createCarSchema, 'body'), // Validate the car data in the request body
  CarController.createCar
);

// Route to update an existing car
router.put('/:id',
  validatorHandler(getCarSchema, 'params'), // Validate 'id' in params
  validatorHandler(updateCarSchema, 'body'), // Validate updated car data in the request body
  CarController.updateCar
);

// Route to delete a car
router.delete('/:id',
  validatorHandler(getCarSchema, 'params'), // Validate 'id' in params
  CarController.deleteCar
);

// Export the router to be mounted by the parent application
module.exports = router;
