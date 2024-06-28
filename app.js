const express = require('express');
const app = express();

const uploadPhoto = require('./uploadPhoto')

app.use('uploadPhoto', uploadPhoto);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});