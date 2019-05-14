module.exports = (sequelize, Datatypes) => {

    var Comment = sequelize.define('Comment', {
        UserID: {
            type: Datatypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE'
        },
        date: {
            type: Datatypes.DATE
        },
        content: {
            type: Datatypes.STRING
        }
    });

    return Comment;
}; 
