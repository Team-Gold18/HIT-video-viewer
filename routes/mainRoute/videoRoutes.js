const videoController = require("../../controllers/video.controller");
const upload = require("../../utils/multerConfig");
 const router = require("express").Router();

 router.post("/createVideo", upload.videoUpload.any(), videoController.create);

 router.get('/getAllVideos', videoController.getAllVideo);

router.get('/getAllVideos/:id', videoController.getVideo);

router.put('/updateVideo/:id', videoController.updateVideo);

router.delete('/deleteVideo/:id', videoController.deleteVideo);

module.exports = router;
