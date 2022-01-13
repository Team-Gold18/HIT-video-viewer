const routes = require('express').Router();

const userRoute = require('./mainRoute/userRoutes');
/*const videoRoute = require('./mainRoute/videoRoutes');
const likeRoute = require('./mainRoute/likeRoutes');
const commentRoute = require('./mainRoute/commentRoute');
const categoryRoute = require('./mainRoute/categoryRoute');
const subcategoryRoute = require('./mainRoute/subcategoryRoute');*/

routes.use('/user', userRoute);
/*routes.use('/video', videoRoute);
routes.use('/like', likeRoute);
routes.use('/comment', commentRoute);
routes.use('/category', categoryRoute);
routes.use('/subcategory', subcategoryRoute);*/



module.exports = routes;
