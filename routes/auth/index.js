const router = require('express').Router();
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

module.exports = function(models) {
    router.get('/', function(req, res, next) {
        //console.log(models);

        models.Auth.findAll(

        ).then( row => {
            if (row != null) {
                res.json(row);
            } else {

            } 
        }) 
            .catch(err => { console.log(err); });
    });

    router.get('/post', function( req, res, next) {
        models.Auth.create(
            {
                ipAddress: '5432',
                token: '543254432'
            }
        ).then(
            result => { res.json(result); }
        ).catch(
            err => { console.log(err); });
    });
    return router;
};
