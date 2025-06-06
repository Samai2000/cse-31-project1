const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Mount the routes
app.use('/', require('./routes'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});