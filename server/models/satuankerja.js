'use strict';
module.exports = (sequelize, DataTypes) => {
  const SatuanKerja = sequelize.define('SatuanKerja', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    expiredDate: DataTypes.DATE
  }, {
    timestamps: true,
    updatedAt: 'lastUpdate',
    createdAt: 'createDate',
  });
  SatuanKerja.associate = function(models) {
    // associations can be defined here
    SatuanKerja.belongsTo(models.JenisSatKer);
    SatuanKerja.belongsTo(models.SatuanKerja, {
      foreignKey: 'IndukSatKerId'
    });
  };
  return SatuanKerja;
};