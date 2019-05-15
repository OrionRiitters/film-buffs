module.exports = (sequelize, Datatypes) => {
  var Comment = sequelize.define('Comment', {
    UserID: {
      type: Datatypes.INTEGER,
      allowNull: false
    },
      EventID: {
          type: Datatypes.INTEGER,
          allowNull: false
      },
    date: {
      type: Datatypes.DATE,
    },
    content: {
      type: Datatypes.STRING,
    },
  })

  return Comment
}
