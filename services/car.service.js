const axios = require('axios');
const { config } = require('../config/config');

/**
 * Service class for handling car-related API operations.
 */
class CarService {
  constructor() {
    // Initializes the CarService.
  }

  /**
   * Creates a new car entry using the provided data.
   * @param {Object} data - Car data to be sent to the API.
   * @returns {Promise} Axios response promise containing the newly created car.
   */
  async create(data) {
    return axios.post(`${config.apiUrl}/car`, data);
  }

  /**
   * Retrieves all cars from the API.
   * @returns {Promise} Axios response promise containing an array of cars.
   */
  async find() {
    return axios.get(`${config.apiUrl}/car`);
  }

  /**
   * Retrieves a single car by its ID from the API.
   * @param {number|string} id - The ID of the car to fetch.
   * @returns {Promise} Axios response promise containing the car details.
   */
  async findOne(id) {
    return axios.get(`${config.apiUrl}/car/${id}`);
  }

  /**
   * Updates a car's information by its ID.
   * @param {number|string} id - The ID of the car to update.
   * @param {Object} changes - The changes to update the car with.
   * @returns {Promise} Axios response promise reflecting the update operation.
   */
  async update(id, changes) {
    console.log('Updating car:', id, changes);
    return axios.put(`${config.apiUrl}/car/${id}`, changes);
  }

  /**
   * Deletes a car by its ID.
   * @param {number|string} id - The ID of the car to delete.
   * @returns {Promise} Axios response promise reflecting the deletion.
   */
  async delete(id) {
    return axios.delete(`${config.apiUrl}/car/${id}`);
  }
}

module.exports = CarService;
