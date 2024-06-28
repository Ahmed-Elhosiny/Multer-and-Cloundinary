const cloudinary = require('cloudinary').v2;
const upload = require('./multer-config');
const router = require('express').Router();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Express route for image upload
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path , {
         folder:'folder_name'
      });
  
      // Send the Cloudinary URL in the response
      res.json({ imageUrl: result.secure_url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
});

module.exports = router;
  