'use strict';
module.exports = (sequelize, DataTypes) => {
  const MasterIndikator = sequelize.define('MasterIndikator', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    defaultBobot: DataTypes.FLOAT,
    expiredDate: DataTypes.DATE
  }, {
    timestamps: true,
    updatedAt: 'lastUpdate',
    createdAt: 'createDate',
  });
  MasterIndikator.associate = function(models) {
    // associations can be defined here
    MasterIndikator.belongsTo(models.DataDasar, {
      foreignKey: 'PenyebutId'
    });
    MasterIndikator.belongsTo(models.DataDasar, {
      foreignKey: 'PembilangId'
    });
  };
  return MasterIndikator;
};