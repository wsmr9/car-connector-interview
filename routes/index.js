const express = require('express');
const carRoute = require('./car.route');

function routerApi(app) {
  const router = express.Router();

  app.use('/car', carRoute)
}

module.exports = routerApi;
