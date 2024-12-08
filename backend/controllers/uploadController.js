const cloudinary = require('../config/cloudinaryConfig');  // Import Cloudinary configuration
const multer = require('multer');
const stream = require('stream'); // <-- Add this import for the stream module
const upload = multer();  // In-memory storage (store file in memory without saving it to disk)

// Upload handler
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Upload image to Cloudinary using the buffer
    const result = await cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',  // Auto-detect file type (image, video, etc.)
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        // Respond with the uploaded image URL
        res.json({ url: result.secure_url });
      }
    );

    // Create a readable stream from the buffer and pipe it to Cloudinary
    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);
    bufferStream.pipe(result);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
};

module.exports = {
  uploadImage,
};
