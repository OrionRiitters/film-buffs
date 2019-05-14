const router = require('express').Router();
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

module.exports = function(Auth) {
    router.post('/', function(req, res, next) {
        Auth.findOne(
            {options: {
                where: {
                    token: req.body.token
                }
            }}
        ).then( row => {
            if (row != null) {
                console.log(row);
            } else {

            }
        })
            .catch(err => { console.log(err); });
    });
    return router;
};
