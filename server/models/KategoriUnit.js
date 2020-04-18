'use strict';
module.exports = (sequelize, DataTypes) => {
  const KategoriUnit = sequelize.define('KategoriUnit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING
  }, {timestamps: false,});
  KategoriUnit.associate = function (models) {
    // associations can be defined here
    
  };
  return KategoriUnit;
};