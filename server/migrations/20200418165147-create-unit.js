'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      KategoriUnitId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'KategoriUnits'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Units');
  }
};