const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
})
sequelize
  .authenticate()
  .then(() => console.log('connected to postgres'))
  .catch(err => console.log('error connecting', err))

const User = require('./user.js')(sequelize, Sequelize)
const Auth = require('./auth.js')(sequelize, Sequelize)
const Comment = require('./comment.js')(sequelize, Sequelize)
const Event = require('./event.js')(sequelize, Sequelize)
const Poll = require('./poll.js')(sequelize, Sequelize)
const Rating = require('./rating.js')(sequelize, Sequelize)
const initializeData = require('./initializeData.js')

User.hasMany(Comment, {foreignKey: 'UserID'})
Comment.belongsTo(User, {foreignKey: 'UserID'})

/* Below is just for presentation purposes.
 */
sequelize.sync({ force: true }).then(() => {
    initializeData(Event)
})

const models = {
  Auth: Auth,
  User: User,
  Comment: Comment,
  Event: Event,
  Poll: Poll,
  Rating: Rating,
}

module.exports = models
