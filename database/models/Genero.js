module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "generos",
        timestamps: false
    }
    
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
        Genero.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }

    return Genero;
}