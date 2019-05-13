module.exports = (sequelize, Datatypes) => {

    var Auth = sequelize.define('Auth', {
        userID: {
            type: Datatypes.INTEGER,
            primaryKey: true
        },
        ipAddress: {
            type: Datatypes.STRING,
            primaryKey: true
        },
        token: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });

    Auth.sync({force: false}).then( () => {
        console.log('synced auth table');
    });
    return Auth;
};
