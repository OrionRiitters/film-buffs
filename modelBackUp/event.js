module.exports = (sequelize, Datatypes) => {

    var Event = sequelize.define('Event', {
        theater: {
            type: Datatypes.STRING
        },
        date: {
            type: Datatypes.DATE
        },
        coffeeShop: {
            type: Datatypes.STRING
        },
        upcoming: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    });

    Event.sync({force: false}).then( () => {
        console.log('synced event table');
    });

    return Event;
}; 
