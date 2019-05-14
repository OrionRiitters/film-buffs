const router = require('express').Router();
const auth = require('./auth/index.js');

//TODO: Error handling!

module.exports = function(models) {
    router.use('/auth', auth(models));

    router.get('/', (req, res) => {
        res.status(200).json({message: 'Connected!'});
    });
    return router;
};
