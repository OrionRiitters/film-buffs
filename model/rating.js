module.exports = (sequelize, Datatypes) => {

    var Rating = sequelize.define('Rating', {
        value: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        prediction: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        },
        UserID: {
            type: Datatypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE'
        },
        EventID: {
            type: Datatypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });

    return Rating;
}; 
