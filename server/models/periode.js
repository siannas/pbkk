'use strict';
module.exports = (sequelize, DataTypes) => {
  const Periode = sequelize.define('Periode', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nama: DataTypes.STRING
  }, {
    timestamps: true,
    updatedAt: 'lastUpdate',
    createdAt: 'createDate',
  });
  Periode.associate = function(models) {
    // associations can be defined here
  };
  return Periode;
};