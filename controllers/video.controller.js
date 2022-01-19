const Video = require('../models/video');

exports.getAllVideo = function (req, res) {
  Video.find({}, function (err, videos) {
    if (err) {
      res.json({ status: false, data: 'Invalid Request!' });
    }

    res.json({ status: true, data: videos });
  });
};

exports.AddVideo = function (req, res) {
  let videoData = req.body;
  Video.findOne({ title: req.body.title }, (error, video) => {
    if (error) {
      console.log(error);
    } else if (!video) {
      let AddVideo = new Video(videoData);

      AddVideo.save(function (err, videos) {
        if (err) {
          res.json({ status: false, data: 'Unable to add!' });
        }
        console.log(videos);
        res.json({ status: true, data: videos });
      });
    } else {
      console.log('Video title name Already exists');
      res.json({ status: false, data: 'Video title Already exists!' });
    }
  });
};

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
  Video.findOne({ title: req.body.title }, (error, video) => {
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
      console.log('Video title Already exists');
      res.json({ status: false, data: 'Title Already exists!' });
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
