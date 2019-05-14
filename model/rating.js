module.exports = (sequelize, Datatypes) => {

    var Rating = sequelize.define('Rating', {
        rating: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        userID: {
            type: Datatypes.INTEGER,
            references: 'User',
            onDelete: 'CASCADE'
        },
        eventID: {
            type: Datatypes.INTEGER,
            references: 'Event',
            onDelete: 'CASCADE'
        },
        prediction: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    });

    Rating.sync({force: false}).then( () => {
        console.log('synced rating table');
    });

    return Rating;
}; 
