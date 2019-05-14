'use strict';
module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define('Auth', {
        userID: Datatypes.String,
      ipAddress: DataTypes.STRING
  }, {});
  Auth.associate = function(models) {
    // associations can be defined here
  };
  return Auth;
};
