const routes = require('express').Router();


var CategoryController = require('../../controllers/category.controller');


//create new category
routes.post('/createCategory',  CategoryController.AddCategory);

routes.get('/getAllCategories',  CategoryController.getAllCategory);

routes.get('/getAllCategories/:id',  CategoryController.getCategory);

routes.put('/updateCategory/:id',  CategoryController.updateCategory);

routes.delete('/deleteCategory/:id',  CategoryController.deleteCategory);

  
  
module.exports = routes;
