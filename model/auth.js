


module.exports = (sequelize, Datatypes) => {

    var Auth = sequelize.define('Auth', {
        userID: {
            type: Datatypes.STRING
        },
        ipAddress: {
            type: Datatypes.STRING
        },
        token: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });

    Auth.sync({force: true}).then( () => {
        console.log('synced auth table');
    }).catch(err => {console.log(err);});
    return Auth;
};
