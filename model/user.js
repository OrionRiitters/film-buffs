
module.exports = (sequelize, Datatypes) => {

    var User = sequelize.define('User', {
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        usernameHash: {
            type: Datatypes.STRING
        }
    });

    User.sync({force: false}).then( () => {
        console.log('synced user table');
    });

    return User;
}; 
