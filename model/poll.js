module.exports = (sequelize, Datatypes) => {

    var Poll = sequelize.define('Poll', {
        movie: {
            type: Datatypes.STRING
        },
        theater: {
            type: Datatypes.STRING
        },
        coffeeShop: {
            type: Datatypes.STRING
        },
        date: {
            type: Datatypes.DATE
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
        length: {
            type: Datatypes.DOUBLE
        },
        hasHiked: {
            type: Datatypes.BOOLEAN
        }
    });

    Poll.sync({force: false}).then( () => {
        console.log('synced poll table');
    });

    return Poll;
}; 
