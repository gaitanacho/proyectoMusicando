module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "artistas",
        timestamps: false
    }
    
    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = function(models){
        Artista.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "artista_id"
        })
    }

    return Artista;
}