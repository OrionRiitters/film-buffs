const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_URI,
                                { dialect: 'postgres' });
sequelize.authenticate()
    .then(() => console.log('connected to postgres'))
    .catch(err => console.log('error connecting', err));



const auth = require('./auth.js')(sequelize, Sequelize);
const user = require('./user.js');
const comment = require('./comment.js');
const event = require('./event.js');
const movie = require('./movie.js');
const poll = require('./poll.js');
const rating = require('./rating.js');

module.exports = {
    models: {
        auth: auth,
        user: user,
        comment: comment,
        event: event,
        movie: movie,
        poll: poll,
        rating: rating
}};

