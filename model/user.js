module.exports = (sequelize, Datatypes) => {
  var User = sequelize.define('User', {
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    passwordHash: {
      type: Datatypes.STRING,
    },
  })

  return User
}
