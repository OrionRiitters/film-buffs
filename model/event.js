module.exports = (sequelize, Datatypes) => {
  var Event = sequelize.define('Event', {
    theater: {
      type: Datatypes.STRING,
    },
    date: {
      type: Datatypes.DATE,
    },
    coffeeShop: {
      type: Datatypes.STRING,
    },
    upcoming: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
    },
    movieTitle: {
      type: Datatypes.STRING,
    },
    imageURL: {
      type: Datatypes.STRING,
    },
    imdbURL: {
      type: Datatypes.STRING,
    },
  })

  return Event
}
