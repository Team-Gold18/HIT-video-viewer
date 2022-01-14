const routes = require('express').Router();

const userRoute = require('./mainRoute/userRoutes');
const commentRoute = require('./mainRoute/commentRoute');
const likeRoute = require('./mainRoute/likeRoute');
/*const videoRoute = require('./mainRoute/videoRoutes');


const categoryRoute = require('./mainRoute/categoryRoute');
const subcategoryRoute = require('./mainRoute/subcategoryRoute');*/

routes.use('/user', userRoute);
routes.use('/comment', commentRoute);
routes.use('/like', likeRoute);
/*routes.use('/video', videoRoute);

routes.use('/comment', commentRoute);
routes.use('/category', categoryRoute);
routes.use('/subcategory', subcategoryRoute);*/



module.exports = routes;
