const express = require('express');
require('dotenv').config()
const app = express();

const uploadPhoto = require('./routes/uploadPhotoRoute')

app.use('/uploadPhoto', uploadPhoto);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});