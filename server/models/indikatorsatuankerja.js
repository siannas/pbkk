'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndikatorSatuanKerja = sequelize.define('IndikatorSatuanKerja', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bobot: DataTypes.FLOAT,
    target: DataTypes.FLOAT,
    capaian: DataTypes.FLOAT
  }, {
    timestamps: true,
    createdAt: false,
    updatedAt: 'lastUpdate',
  });
  IndikatorSatuanKerja.associate = function(models) {
    // associations can be defined here
    IndikatorSatuanKerja.belongsTo(models.SatuanKerja, {
      foreignKey: 'SatKerId'
    });

    IndikatorSatuanKerja.belongsTo(models.IndikatorPeriode, {
      foreignKey: 'IndikatorPeriodeId'
    });
  };
  return IndikatorSatuanKerja;
};