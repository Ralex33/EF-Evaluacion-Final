const express = require('express');
const exampleRoutes = require('./routes/exampleRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', exampleRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;