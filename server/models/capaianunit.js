'use strict';
module.exports = (sequelize, DataTypes) => {
  const CapaianUnit = sequelize.define('CapaianUnit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    waktu: DataTypes.DATE,
    capaian: DataTypes.FLOAT
  }, {timestamps: false,});
  CapaianUnit.associate = function(models) {
    // associations can be defined here
    CapaianUnit.belongsTo(models.Unit);
    CapaianUnit.belongsTo(models.SatuanKerja);
    CapaianUnit.belongsTo(models.DataDasar);
  };
  return CapaianUnit;
};