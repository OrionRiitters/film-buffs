module.exports = (sequelize, Datatypes) => {

    var Rating = sequelize.define('Rating', {
        rating: {
            type: Datatypes.INTEGER
        },
        userID: {
            type: Datatypes.INTEGER
        },
        eventID: {
            type: Datatypes.INTEGER
        }
    });

    Rating.sync({force: false}).then( () => {
        console.log('synced rating table');
    });

    return Rating;
}; 
