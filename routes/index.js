const routes = require('express').Router();
const verify = require('./verifyToken');

const userRoute = require('./mainRoute/userRoutes');
const commentRoute = require('./mainRoute/commentRoute');
const likeRoute = require('./mainRoute/likeRoute');
const videoRoute = require('./mainRoute/videoRoutes');

const categoryRoute = require('./mainRoute/categoryRoute');
const subcategoryRoute = require('./mainRoute/subcategoryRoute');

routes.use('/user', userRoute);
routes.use('/comment', verify, commentRoute);
routes.use('/like', verify, likeRoute);
routes.use('/video', verify, videoRoute);
routes.use('/category', verify, categoryRoute);
routes.use('/subcategory', verify, subcategoryRoute);

module.exports = routes;
