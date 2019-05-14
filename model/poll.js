module.exports = (sequelize, Datatypes) => {
  var Poll = sequelize.define('Poll', {
    movie: {
      type: Datatypes.STRING,
    },
    theater: {
      type: Datatypes.STRING,
    },
    coffeeShop: {
      type: Datatypes.STRING,
    },
    date: {
      type: Datatypes.DATE,
    },
    length: {
      type: Datatypes.DOUBLE,
    },
    UserID: {
      type: Datatypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    EventID: {
      type: Datatypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
    },
  })

  return Poll
}
