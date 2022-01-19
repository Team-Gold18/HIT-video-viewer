const Video = require('../models/video');
const   cloud = require("../utils/cloudinary");

exports.getAllVideo = function (req, res) {
  Video.find({}, function (err, videos) {
    if (err) {
      res.json({ status: false, data: 'Invalid Request!' });
    }

    res.json({ status: true, data: videos });
  });
};
// video controller 
exports.create = function (req, res, next)  {
    let test = {
      name: req.files[0].originalname,
      url: req.files[0].path,
      id: "",
    };
    console.log(req.files[0].originalname);
    Video.findOne({ name: test.name }, (err, cb) => {
      if (err) {
        res.json({
          error: true,
          message: 'There was a problem uploading the video',
        });
      } else {
        let file = {
          name: req.files[0].originalname,
          url: req.files[0].path,
          id: "",
        };
        cloud
          .uploads(file.url)
          .then((result) => {
            Video.create({
              name: req.files[0].originalname,
              url: result.url,
              id: result.id,
            });
          })
          .then((result) => {
            res.json({
              success: true,
              
              data: result,
              message:'uploaded successfully'
            });
          })
          .catch((err) => {
            res.json({
              error: true,
              message: err.message,
            });
          });
      }
    });
  }




exports.getVideo = function (req, res) {
  Video.findById(req.params.id, function (err, videos) {
    if (err) {
      res.json({ status: false, data: 'Invalid ID!' });
    }

    res.json({ status: true, data: videos });
  });
};

exports.updateVideo = function (req, res) {
  const id = req.params.id;
  Video.findOne({ name: req.body.name }, (error, video) => {
    if (error) {
      console.log(error);
    } else if (!video || (video && video.id == id)) {
      Video.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        function (err, videos) {
          if (err) {
            res.json({ status: false, data: 'Unable to update!' });
          }
          res.json({ status: true, data: videos });
        }
      );
    } else {
      console.log('Video name Already exists');
      res.json({ status: false, data: 'name Already exists!' });
    }
  });
};

exports.deleteVideo = function (req, res) {
  Video.remove({ _id: req.params.id }, function (err, videos) {
    if (err) {
      res.json({ status: false, data: 'Unable to delete!' });
    }
    res.json({ status: true, data: 'Video removed successfully!' });
  });
};
