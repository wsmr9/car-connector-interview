const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');

const { 
    createCarSchema,
    getCarSchema,
    updateCarSchema
} = require('./../schemas/car.schema');

const CarController = require('../controllers/car.controller')

const router = express.Router();

router.get('/', CarController.getCars);

router.get('/:id',
  validatorHandler(getCarSchema, 'params'), CarController.getCar);

router.post('/',
  validatorHandler(createCarSchema, 'body'), CarController.createCar);

router.put('/:id',
  validatorHandler(getCarSchema, 'params'),
  validatorHandler(updateCarSchema, 'body'),
  CarController.updateCar
);

router.delete('/:id',
  validatorHandler(getCarSchema, 'params'), CarController.deleteCar );

module.exports = router;