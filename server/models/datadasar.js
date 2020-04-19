'use strict';
module.exports = (sequelize, DataTypes) => {
  const DataDasar = sequelize.define('DataDasar', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    expiredDate: DataTypes.DATE
  }, {
    timestamps: true,
    updatedAt: 'lastUpdate',
    createdAt: 'createDate',
  });
  DataDasar.associate = function(models) {
    // associations can be defined here
    DataDasar.hasMany(models.CapaianUnit);
  };
  return DataDasar;
};