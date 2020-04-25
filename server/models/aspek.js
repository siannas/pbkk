'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aspek = sequelize.define('Aspek', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    aspek: DataTypes.STRING,
    komponenAspek: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Aspek.associate = function(models) {
    // associations can be defined here
  };
  return Aspek;
};