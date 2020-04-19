'use strict';
module.exports = (sequelize, DataTypes) => {
  const JenisSatKer = sequelize.define('JenisSatKer', {
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
  JenisSatKer.associate = function(models) {
    // associations can be defined here
    JenisSatKer.hasMany(models.SatuanKerja);
  };
  return JenisSatKer;
};