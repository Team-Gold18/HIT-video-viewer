const routes = require('express').Router();


var UserController = require('../../controllers/user.controller');


//create new user
routes.post('/createUser',  UserController.AddUser);

routes.post('/loginUser',  UserController.loginUser);

routes.get('/getAllUsers',  UserController.getAllUser);

routes.get('/getAllUsers/:id',  UserController.getUser);

routes.put('/updateUser/:id',  UserController.updateUser);

routes.delete('/deleteUser/:id',  UserController.deleteUser);

  
  
module.exports = routes;
