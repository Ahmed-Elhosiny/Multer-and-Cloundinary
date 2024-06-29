const upload = require('./../utils/multerUpload');
const cloudinary = require('./../utils/cloudinaryConfig');


exports.uploadPhoto = upload.single('photo');


exports.uploadToCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(401).json({
        message: 'No file uploaded'
      });
    }
    
  const result = await new Promise((resolve, reject) => {
    
    const uploadStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
      if (error) res.status(500).json({
        message: `Error uploading to Cloudinary ${error}`
      });
      resolve(result);
      
    });
    uploadStream.end(req.file.buffer);
  });
  req.file.filename = result.secure_url;
  res.status(200).json({
    status:'success',
    message: "Photo uploaded successfully",
    data: {
      PhotoUrl: result.secure_url
    },
  });
  } catch (error) {
    res.status(500).json({
      error
    });
  }
  
};