const express = require('express');
const carRoute = require('./car.route');

/**
 * Configures the API routes for the application.
 * @param {Express.Application} app - The main Express application instance.
 */
function routerApi(app) {
  // Create a new router instance to encapsulate API routes.
  const router = express.Router();

  // Mount the car-related routes at the '/car' base path.
  app.use('/car', carRoute);
}

// Export the function to be used in the main application setup.
module.exports = routerApi;
