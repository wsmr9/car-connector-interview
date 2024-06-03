require('dotenv').config();  // Load environment variables from .env file into process.env

/**
 * Configuration object for the application.
 * It retrieves environment variables and provides defaults where necessary.
 */
const config = {
    port: process.env.PORT || '3001',  // The port on which the server should run, defaulting to 3001 if not specified
    apiUrl: process.env.API_URL        // Base URL for the API endpoints, must be defined in the environment variables
}

module.exports = { config };  // Export the config object for use in other parts of the application
