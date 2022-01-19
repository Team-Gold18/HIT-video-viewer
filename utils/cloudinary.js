require("dotenv").config();
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'hasthiya-api-18',
  api_key: process.env.API_KEY || '193268822236612',
  api_secret: process.env.API_SECRET || '6ucqCzYlVmcCPn25durJu6c68NE',
});
exports.uploads = (file) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({ url: result.url, id: result.public_id });
      },
      { resource_type: "auto" }
    );
  });
};