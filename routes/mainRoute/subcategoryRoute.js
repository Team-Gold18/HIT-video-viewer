const routes = require('express').Router();


var SubcategoryController = require('../../controllers/subcategory.controller');


//create new subcategory
routes.post('/createSubcategory',  SubcategoryController.AddSubcategory);

routes.get('/getAllSubcategories',  SubcategoryController.getAllSubcategory);

routes.get('/getAllSubcategories/:id',  SubcategoryController.getSubcategory);

routes.put('/updateSubcategory/:id',  SubcategoryController.updateSubcategory);

routes.delete('/deleteSubcategory/:id',  SubcategoryController.deleteSubcategory);

  
  
module.exports = routes;
