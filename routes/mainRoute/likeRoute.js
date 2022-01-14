const routes = require('express').Router();


var UserController = require('../../controllers/like.controller');


//create new user
routes.post('/createLike',  UserController.AddLike);

routes.get('/getAllLike',  UserController.getAllLike);

routes.get('/getLike/:id',  UserController.getLike);

routes.delete('/deleteLike/:id',  UserController.deleteLike);

  
  
module.exports = routes;
