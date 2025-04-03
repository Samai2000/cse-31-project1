const express = require('express');
const router = express.Router();

// Import the users router
const usersRouter = require('./users');

// Mount the users router
router.use('/users', usersRouter);

// Export the router
module.exports = router;