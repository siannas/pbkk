'use strict';
var moment = require('moment');

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
    expiredDate: {
        type: DataTypes.DATE,
        get: function() {
            var date = this.getDataValue('expiredDate');
            if( !moment(date).isValid()){
                return date;
            }
            return moment.utc(date).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    createDate:{
        type: DataTypes.DATE,
        get: function() {
            var date = this.getDataValue('createDate');
            if( !moment(date).isValid()){
                return date;
            }
            return moment.utc(date).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    lastUpdate:{
        type: DataTypes.DATE,
        get: function() {
            var date = this.getDataValue('lastUpdate');
            if( !moment(date).isValid()){
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
  MasterIndikator.associate = function(models) {
    // associations can be defined here
    MasterIndikator.belongsTo(models.DataDasar, {
        foreignKey: 'PenyebutId',
        as: 'penyebut' 
    });
    MasterIndikator.belongsTo(models.DataDasar, {
        foreignKey: 'PembilangId',
        as: 'pembilang'
    });
    MasterIndikator.belongsTo(models.Aspek, {
        foreignKey: 'AspekId',
    });
  };
  return MasterIndikator;
};