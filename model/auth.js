module.exports = (sequelize, Datatypes) => {

    var Auth = sequelize.define('Auth', {
        UserId: {
            type: Datatypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE'

        },
        ipAddress: {
            type: Datatypes.STRING
        },
        token: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });

    return Auth;
};
