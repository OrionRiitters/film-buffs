const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');
const api_routes = require('./routes/api.js');


// Create environment variable from .env file
dotenv.config();

// Set up database, this will work locally, not for Heroku.
sequelize = new Sequelize(process.env.POSTGRES_URI, {dialect: 'postgres'});

sequelize.authenticate()
    .then(() => console.log('connected to postgres'))
    .catch(err => console.log('error connecting', err));


const app = express();

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(bodyParser.json());
app.use('/api', api_routes());

app.use(function(req, res, next) {
    res.status(404).send('Not found');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal error');
});

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port);
});
