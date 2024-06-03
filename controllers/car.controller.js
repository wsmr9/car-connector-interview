const CarService = require('../services/car.service');

class CarController {
    constructor() {
        this.carService = new CarService();
        this.createCar = this.createCar.bind(this);
        this.getCars = this.getCars.bind(this);
        this.getCar = this.getCar.bind(this);
        this.updateCar = this.updateCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    async createCar(req, res, next) {
        try {
            console.log('asdfasdf')
            const data = req.body;
            console.log(data)
            const response = await this.carService.create(data);
            res.status(201).json(response.data);
        } catch (error) {
            next(error)
        }
    }

    async getCars(req, res, next) {
        try {
            const response = await this.carService.find();
            res.status(200).json(response.data);
        } catch (error) {
            next(error)
        }
    }

    async getCar(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.carService.findOne(id);
            res.status(200).json(response.data);
        } catch (error) {
            next(error)        
        }
    }

    async updateCar(req, res, next) {
        const { id } = req.params;
        const changes = req.body;
        console.log('jajjajajaja')
        try {
            const response = await this.carService.update(id, changes);
            res.status(200).json(response.data);
        } catch (error) {
            next(error)
        }
    }

    async deleteCar(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.carService.delete(id);
            res.status(200).json(response.data);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CarController();
