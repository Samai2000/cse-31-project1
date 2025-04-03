const router = require('express').Router();

// Define the route
router.get('/', (req, res) => {
  res.send('Hello World');
});

// Export the router
module.exports = router;