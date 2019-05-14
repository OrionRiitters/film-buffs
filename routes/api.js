const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');


/*
const comment = require('./comment');
const event = require('./event');
const movie = require('./movie');
const poll = require('./poll');
const rating = require('./rating');
const user = require('./user');

*/

//TODO: Error handling!

module.exports = function(models) {

    router.use('/auth', auth);
    router.use('/user', user);  

/*    router.use('/comment', comment);
    router.use('/event', event);
    router.use('/movie', movie);
    router.use('/poll', poll);
    router.use('/rating', rating);
   */ 

    router.get('/', (req, res) => {
        res.status(200).json({message: 'Connected!'});
    });

    return router;

};
