const {
    DataTypes,
    Model
} = require('sequelize');

class Unit extends Model {}

const init = (sequelize) => {
    Unit.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Unit', // We need to choose the model name
        timestamps: false,
    });
};

module.exports = {
    init,
    Unit
}