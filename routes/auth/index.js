const router = require('express').Router();
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_URI,
                                { dialect: 'postgres' });
sequelize.authenticate()
    .then(() => console.log('connected to postgres'))
    .catch(err => console.log('error connecting', err));

const Auth = require('../../model/auth.js')(sequelize, Sequelize);


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
};
