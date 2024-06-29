const express = require('express');
const uploadPhotoController = require('./../controllers/uploadPhotoController');

const router = express.Router({
  caseSensitive: false,
  mergeParams: false,
  strict: false,
});


router.post(
  '/upload',
  uploadPhotoController.uploadPhoto,
  uploadPhotoController.uploadToCloudinary,
);


module.exports = router;