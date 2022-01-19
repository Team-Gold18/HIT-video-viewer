const routes = require('express').Router();
const verify = require('../verifyToken');


var UserController = require('../../controllers/user.controller');


//create new user
routes.post('/createUser', UserController.AddUser);

routes.post('/loginUser', UserController.loginUser);

routes.get('/getAllUsers', verify, UserController.getAllUser);

routes.get('/getAllUsers/:id', verify, UserController.getUser);

routes.put('/updateUser/:id', verify, UserController.updateUser);

routes.delete('/deleteUser/:id', verify, UserController.deleteUser);



module.exports = routes;
