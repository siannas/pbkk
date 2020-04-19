'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Periodes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATEONLY
      },
      nama: {
        type: Sequelize.STRING
      },
      createDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lastUpdate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Periodes');
  }
};