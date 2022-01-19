const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied. Firstly you have to login in to the website');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
}