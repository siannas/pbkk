const {
    DataTypes,
    Model
} = require('sequelize');

class KategoriUnit extends Model {}

const init = (sequelize) => {
    KategoriUnit.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nama: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'KategoriUnit', // We need to choose the model name
        timestamps: false,
    });

    
};

module.exports = {
    init,
    KategoriUnit
}