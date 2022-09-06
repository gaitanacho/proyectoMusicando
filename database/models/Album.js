module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "albumes",
        timestamps: false
    }
    
    const Album = sequelize.define(alias, cols, config);

    Album.associate = function(models){
        Album.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "album_id"
        })
    }

    return Album;
}