const axios = require('axios')

const { config } = require('../config/config')

class CarService {
  constructor() {
  }

  async create(data) {
    return await axios.post(`${config.apiUrl}/car`, data);
  }

  async find() {
    return await axios.get(`${config.apiUrl}/car`)
  }

  async findOne(id) {
    return await axios.get(`${config.apiUrl}/car/${id}`)
  }

  async update(id, changes) {
    console.log(id , changes)
    console.log('asdfasdfs')
    return await axios.put(`${config.apiUrl}/car/${id}` , changes)
  }

  async delete(id) {
    return await axios.delete(`${config.apiUrl}/car/${id}`)
  }
}

module.exports = CarService;
