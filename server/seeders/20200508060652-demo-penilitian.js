'use strict';
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'myInputFile.csv'; 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let json = await csvToJson.formatValueByType().getJsonFromCsv(fileInputName);

    
    await queryInterface.bulkInsert('Penelitians', 
        json, 
        {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Penelitians', null, {});
  }
};
