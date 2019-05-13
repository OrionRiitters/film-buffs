module.exports = (sequelize, Datatypes) => {

    var Movie = sequelize.define('Movie', {
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        imageURL: {
            type: Datatypes.STRING
        },
        imdbURL: {
            type: Datatypes.STRING
        }
    });

    Movie.sync({force: false}).then( () => {
        console.log('synced movie table');
    });

    return Movie;
}; 
