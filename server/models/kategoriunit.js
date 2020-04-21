'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('KategoriUnit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
  }, {timestamps: false,});
  Unit.associate = function(models) {
    // associations can be defined here
  };
  return Unit;
};