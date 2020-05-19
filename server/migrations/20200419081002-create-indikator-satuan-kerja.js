'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IndikatorSatuanKerjas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SatKerId: // name of the key we're adding 
      {
        type: Sequelize.UUID,
        references: {
            model: { tableName: 'SatuanKerjas'}, // name of Target model
            key: 'id', // key in Target model that we're referencing
        },
      },
      IndikatorPeriodeId:
      {
        type: Sequelize.INTEGER,
        references: {
            model: { tableName: 'IndikatorPeriodes'}, // name of Target model
            key: 'id', // key in Target model that we're referencing
        },
      },
      bobot: {
        type: Sequelize.FLOAT
      },
      target: {
        type: Sequelize.FLOAT
      },
      capaian: {
        type: Sequelize.FLOAT
      },
      lastUpdate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IndikatorSatuanKerjas');
  }
};