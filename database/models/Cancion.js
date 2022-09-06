module.exports = (sequelize, dataTypes) => {
    let alias = "Canciones";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER   
        },
        created_at: {
            type: 'TIMESTAMP',
            allowNull: true
        },
          updated_at: {
            type: 'TIMESTAMP',
            allowNull: true
        },
        genero_id: {
            type: dataTypes.INTEGER
        },
        album_id: {
            type: dataTypes.INTEGER
        },
        artista_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "canciones",
        timestamps: false
    }
    
    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(models){
        Cancion.belongsTo(models.Artistas, {
            as: "artistas",
            foreignKey: "artista_id"
        })
        Cancion.belongsTo(models.Albumes, {
            as: "albumes",
            foreignKey: "album_id"
        })
        Cancion.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genero_id"
        })
    }

    return Cancion;
}