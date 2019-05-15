const router = require('express').Router();
const auth = require('./auth/index.js');
const comment = require('./comment/index.js');
const event = require('./event/index.js');
const poll = require('./poll/index.js');
const rating = require('./rating/index.js');
const user = require('./user/index.js');

//TODO: Error handling!

module.exports = function(models) {
    router.use('/auth', auth(models))
    router.use('/event', event(models))
    router.use('/comment', comment(models))
    
    router.get('/', (req, res) => {
        res.status(200).json({message: 'Connected!'});
    });
    return router;
};
