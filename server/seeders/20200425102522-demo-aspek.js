'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Aspeks', 
    [
        {
          "id": 1,
          "aspek": "EKSELENSI",
          "komponenAspek": "REPUTASI AKADEMIK"
        },
        {
          "id": 2,
          "aspek": "MENDUNIA",
          "komponenAspek": "REPUTASI INTERNASIONAL"
        },
        {
          "id": 3,
          "aspek": "AMANAH",
          "komponenAspek": "PENGELOLAAN SUMBER DAYA INSTITUSI"
        },
        {
          "id": 4,
          "aspek": "AMANAH",
          "komponenAspek": "PENGELOLAAN SUMBER DAYA MANUSIA"
        },
        {
          "id": 5,
          "aspek": "SUMBANGSIH",
          "komponenAspek": "KONTRIBUSI PADA LINGKUNGAN"
        },
        {
          "id": 6,
          "aspek": "SUMBANGSIH",
          "komponenAspek": "KONTRIBUSI PADA MASYARAKAT"
        }
       ]
    , 
    {},
    {
        'id': {
          autoIncrement: true
        }
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Aspeks', null, {});
  }
};
