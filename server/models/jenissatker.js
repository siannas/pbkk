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
    expiredDate: {
      type: DataTypes.DATE,
      get: function () {
        var date = this.getDataValue('expiredDate');
        if (!moment(date).isValid()) {
          return date;
        }
        return moment.utc(date).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    createDate: {
      type: DataTypes.DATE,
      get: function () {
        var date = this.getDataValue('createDate');
        if (!moment(date).isValid()) {
          return date;
        }
        return moment.utc(date).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    lastUpdate: {
      type: DataTypes.DATE,
      get: function () {
        var date = this.getDataValue('lastUpdate');
        if (!moment(date).isValid()) {
          return date;
        }
        return moment.utc(date).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }, {
    timestamps: true,
    updatedAt: 'lastUpdate',
    createdAt: 'createDate',
  });
  JenisSatKer.associate = function (models) {
    // associations can be defined here
    JenisSatKer.hasMany(models.SatuanKerja);
  };
  return JenisSatKer;
};