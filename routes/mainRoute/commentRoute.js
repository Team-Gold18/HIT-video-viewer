const routes = require('express').Router();

var CommentController = require('../../controllers/comment.controller')

routes.post('/createComment',  CommentController.AddComment);

routes.get('/getAllComments',  CommentController.getAllComment);

routes.get('/getAllComments/:id',  CommentController.getComment);

routes.put('/updateComment/:id',  CommentController.updateComment);

routes.delete('/deleteComment/:id',  CommentController.deleteComment);

module.exports = routes;