'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CapaianUnits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UnitId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'Units'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      SatKerId: // name of the key we're adding 
      {
          type: Sequelize.UUID,
          references: {
              model: { tableName: 'SatuanKerjas'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      DataDasarId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'DataDasars'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      waktu: {
        type: Sequelize.DATE
      },
      capaian: {
        type: Sequelize.FLOAT
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CapaianUnits');
  }
};