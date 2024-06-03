const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

// Import custom middleware for error handling
const { 
    logErrors, 
    errorHandler, 
    boomErrorHandler, 
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Whitelist of domains allowed to access the API
const whitelist = ['http://localhost:3000', 'http://localhost'];

const corsOptions = {
  // Custom CORS function to check incoming requests against the whitelist
  origin: (origin, callback) => {
    // Allow requests from whitelisted domains or server-to-server requests (no origin)
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Apply CORS middleware with the configured options
app.use(cors(corsOptions));

// Simple route for API health check or initial greeting
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Setup API routes through a routing middleware
routerApi(app);

// Error handling middleware
app.use(logErrors); // Logs errors
app.use(boomErrorHandler); // Handles errors thrown by 'boom'
app.use(errorHandler); // Generic error handler

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
