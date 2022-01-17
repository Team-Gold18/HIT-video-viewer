const routes = require('express').Router();

var VideoController = require('../../controllers/video.controller');

routes.post('/createVideo', VideoController.AddVideo);

routes.get('/getAllVideos', VideoController.getAllVideo);

routes.get('/getAllVideos/:id', VideoController.getVideo);

routes.put('/updateVideo/:id', VideoController.updateVideo);

routes.delete('/deleteVideo/:id', VideoController.deleteVideo);

module.exports = routes;
