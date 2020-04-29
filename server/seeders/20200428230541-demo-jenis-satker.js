'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JenisSatKers',
    [
      {
        "id": 1,
        "nama": "Rektor",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 2,
        "nama": "Majelis Wali Amanat",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 3,
        "nama": "Senat Akademik",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 4,
        "nama": "Wakil Rektor",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 5,
        "nama": "Sekretaris Institut",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 6,
        "nama": "Fakultas",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 7,
        "nama": "Sekolah",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 8,
        "nama": "Direktorat",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 9,
        "nama": "Biro",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 10,
        "nama": "Lembaga",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 11,
        "nama": "Kantor",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 12,
        "nama": "Badan",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 13,
        "nama": "Departemen",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 14,
        "nama": "Program Studi",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 15,
        "nama": "Laboratorium",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 16,
        "nama": "Studio",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 17,
        "nama": "Bengkel",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 18,
        "nama": "Unit Pelaksana Teknis",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 19,
        "nama": "Perpustakaan",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 20,
        "nama": "Pusat Studi",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 21,
        "nama": "Pusat Lain-lain",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 22,
        "nama": "Subdirektorat",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 23,
        "nama": "Seksi",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 24,
        "nama": "Bagian",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 25,
        "nama": "Subbagian",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 26,
        "nama": "Unit",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 27,
        "nama": "Subunit",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 28,
        "nama": "Komite",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 29,
        "nama": "Unit Usaha Komersial",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 30,
        "nama": "Unit Usaha Penunjang",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 31,
        "nama": "Pembantu Rektor",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 32,
        "nama": "Dewan",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 33,
        "nama": "Pusat Penelitian",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 34,
        "nama": "Pusat Unggulan IPTEK",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 35,
        "nama": "Pusat Kajian",
        "createDate": new Date(),
        "lastUpdate": new Date()
      },
      {
        "id": 36,
        "nama": "Institut",
        "createDate": new Date(),
        "lastUpdate": new Date()
      }
    ]
    , {}
    , 
    {
        'id': {
          autoIncrement: true
        }
      }
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JenisSatKers', null, {});
  }
};
