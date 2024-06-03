const CarService = require('../services/car.service');

/**
 * Controller class to handle routes related to car operations.
 * This class manages interactions with the CarService and the API responses.
 */
class CarController {
    constructor() {
        this.carService = new CarService();
        // Binding this context to methods to ensure they maintain access to the class instance
        this.createCar = this.createCar.bind(this);
        this.getCars = this.getCars.bind(this);
        this.getCar = this.getCar.bind(this);
        this.updateCar = this.updateCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    /**
     * Create a car using the data from the request body.
     * @param {Express.Request} req - The request object containing car data.
     * @param {Express.Response} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    async createCar(req, res, next) {
        try {
            const data = req.body;
            const response = await this.carService.create(data);
            res.status(201).json(response.data);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get all cars.
     * @param {Express.Request} req - The request object.
     * @param {Express.Response} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    async getCars(req, res, next) {
        try {
            const response = await this.carService.find();
            res.status(200).json(response.data);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get a single car by its ID.
     * @param {Express.Request} req - The request object.
     * @param {Express.Response} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    async getCar(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.carService.findOne(id);
            res.status(200).json(response.data);
        } catch (error) {
            next(error);        
        }
    }

    /**
     * Update a car's data by its ID using the provided request body.
     * @param {Express.Request} req - The request object.
     * @param {Express.Response} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    async updateCar(req, res, next) {
        const { id } = req.params;
        const changes = req.body;
        try {
            const response = await this.carService.update(id, changes);
            res.status(200).json(response.data);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Delete a car by its ID.
     * @param {Express.Request} req - The request object.
     * @param {Express.Response} res - The response object.
     * @param {Function} next - The next middleware function.
     */
    async deleteCar(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.carService.delete(id);
            res.status(200).json(response.data);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CarController();
