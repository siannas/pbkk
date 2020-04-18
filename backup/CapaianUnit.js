const {
    DataTypes,
    Model
} = require('sequelize');

class CapaianUnit extends Model {}

const init = (sequelize) => {
    CapaianUnit.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        waktu: {
            type: DataTypes.DATE,
        },
        capaian: {
            type: DataTypes.FLOAT
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'CapaianUnit', // We need to choose the model name
        timestamps: false,
    });

    
};

module.exports = {
    init,
    CapaianUnit
}