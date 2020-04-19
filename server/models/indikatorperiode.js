'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndikatorPeriode = sequelize.define('IndikatorPeriode', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    bobot: DataTypes.FLOAT
  }, {});
  IndikatorPeriode.associate = function(models) {
    // associations can be defined here
    IndikatorPeriode.belongsTo(models.MasterIndikator, {
      foreignKey: 'MasterId'
    });
    IndikatorPeriode.belongsTo(models.Periode, {
      foreignKey: 'PeriodeId'
    });
  };
  return IndikatorPeriode;
};