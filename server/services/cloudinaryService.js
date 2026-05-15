const streamifier = require('streamifier');
const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = (buffer, folder = 'image-studio') =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder }, (error, result) => {
      if (error) return reject(error);
      resolve(result.secure_url);
    });
    streamifier.createReadStream(buffer).pipe(stream);
  });

module.exports = { uploadToCloudinary };
