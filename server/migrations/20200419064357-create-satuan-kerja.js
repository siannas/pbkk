'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SatuanKerjas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      JenisSatKerId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'JenisSatKers'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      IndukSatKerId: // name of the key we're adding 
      {
          type: Sequelize.INTEGER,
          references: {
              model: { tableName: 'SatuanKerjas'}, // name of Target model
              key: 'id', // key in Target model that we're referencing
          },
      },
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      expiredDate: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.removeColumn(
    //   'SatuanKerjas',
    //   'IndukSatKerId'
    //   ).then(()=> {
        return queryInterface.dropTable('SatuanKerjas');
      // }); 
  }
};