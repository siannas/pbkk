'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IndikatorPeriodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MasterId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'MasterIndikators'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      PeriodeId: // name of the key we're adding 
      {
          type: Sequelize.DATEONLY,
          references: {
              model: { tableName: 'Periodes'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      bobot: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IndikatorPeriodes');
  }
};