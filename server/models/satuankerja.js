'use strict';
module.exports = (sequelize, DataTypes) => {
  const SatuanKerja = sequelize.define('SatuanKerja', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    levelUnit: DataTypes.INTEGER,
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
  SatuanKerja.associate = function (models) {
    // associations can be defined here
    SatuanKerja.belongsTo(models.JenisSatKer);
    SatuanKerja.belongsTo(models.SatuanKerja, {
      foreignKey: 'IndukSatKerId'
    });
  };
  return SatuanKerja;
};