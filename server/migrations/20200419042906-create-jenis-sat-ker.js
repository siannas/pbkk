'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JenisSatKers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      },
      expiredDate: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JenisSatKers');
  }
};