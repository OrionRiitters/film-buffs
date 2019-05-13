module.exports = (sequelize, Datatypes) => {

    var Comment = sequelize.define('Comment', {
        UserID: {
            type: Datatypes.INTEGER
        },
        userForumID: {
            type: Datatypes.INTEGER
        },
        eventForumID: {
            type: Datatypes.INTEGER
        },
        date: {
            type: Datatypes.DATE
        },
        content: {
            type: Datatypes.STRING
        }
    });

    Comment.sync({force: false}).then( () => {
        console.log('synced comment table');
    });

    return Comment;
}; 
