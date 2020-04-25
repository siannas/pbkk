'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MasterIndikators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AspekId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'Aspeks'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      PenyebutId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'DataDasars'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      PembilangId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'DataDasars'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      nama: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING(1000)
      },
      defaultBobot: {
        type: Sequelize.FLOAT
      },
      createDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lastUpdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      expiredDate: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MasterIndikators');
  }
};