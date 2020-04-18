'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING
  }, {timestamps: false,});
  Unit.associate = function(models) {
    // associations can be defined here
    Unit.belongsTo(models.KategoriUnit);
  };
  return Unit;
};