const Sequelize = require('sequelize')
const dotenv = require('dotenv')

//dotenv.config()

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

Auth.belongsTo(User, { allowNull: false })
Comment.belongsTo(Event)
Comment.belongsTo(User, { allowNull: false })
Event.hasMany(Comment)
Event.hasMany(Poll)
Event.hasMany(Rating)
Poll.belongsTo(User)
Poll.belongsTo(Event)
Rating.belongsTo(User)
Rating.belongsTo(Event)
User.hasMany(Auth)
User.hasMany(Comment)
User.hasMany(Poll)
User.hasMany(Rating)

sequelize.sync({ force: false })

const models = {
  Auth: Auth,
  User: User,
  Comment: Comment,
  Event: Event,
  Poll: Poll,
  Rating: Rating,
}

module.exports = models
