'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Periodes',
      [{
        "id": 2020,
        "nama": "2020",
        "createDate": new Date(),
        "lastUpdate": new Date()
      }], {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Periodes', null, {});
  }
};