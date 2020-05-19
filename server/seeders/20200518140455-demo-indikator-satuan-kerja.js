'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IndikatorSatuanKerjas',
      [{
          "id": 1,
          "IndikatorPeriodeId": 6,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 2,
          "IndikatorPeriodeId": 7,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 3,
          "IndikatorPeriodeId": 10,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 4,
          "IndikatorPeriodeId": 11,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.037,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 5,
          "IndikatorPeriodeId": 12,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.037,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 6,
          "IndikatorPeriodeId": 13,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 7,
          "IndikatorPeriodeId": 14,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 8,
          "IndikatorPeriodeId": 18,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 9,
          "IndikatorPeriodeId": 19,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 10,
          "IndikatorPeriodeId": 21,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0278,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 11,
          "IndikatorPeriodeId": 24,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 12,
          "IndikatorPeriodeId": 26,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 13,
          "IndikatorPeriodeId": 27,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0185,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 14,
          "IndikatorPeriodeId": 28,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0185,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 15,
          "IndikatorPeriodeId": 29,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 16,
          "IndikatorPeriodeId": 32,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 17,
          "IndikatorPeriodeId": 33,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 18,
          "IndikatorPeriodeId": 34,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 19,
          "IndikatorPeriodeId": 35,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 20,
          "IndikatorPeriodeId": 36,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 21,
          "IndikatorPeriodeId": 38,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 22,
          "IndikatorPeriodeId": 40,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 23,
          "IndikatorPeriodeId": 41,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 24,
          "IndikatorPeriodeId": 43,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0417,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 25,
          "IndikatorPeriodeId": 44,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 26,
          "IndikatorPeriodeId": 56,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 27,
          "IndikatorPeriodeId": 57,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 28,
          "IndikatorPeriodeId": 58,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0231,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 29,
          "IndikatorPeriodeId": 65,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 30,
          "IndikatorPeriodeId": 75,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 31,
          "IndikatorPeriodeId": 76,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0324,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 32,
          "IndikatorPeriodeId": 77,
          "SatKerId": "AEA8C02A-6902-461F-9E5E-121964B46494",
          "bobot": 0.0278,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 33,
          "IndikatorPeriodeId": 1,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 34,
          "IndikatorPeriodeId": 4,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 35,
          "IndikatorPeriodeId": 6,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 36,
          "IndikatorPeriodeId": 7,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 37,
          "IndikatorPeriodeId": 10,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 38,
          "IndikatorPeriodeId": 11,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 39,
          "IndikatorPeriodeId": 12,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 40,
          "IndikatorPeriodeId": 13,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 41,
          "IndikatorPeriodeId": 14,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 42,
          "IndikatorPeriodeId": 16,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 43,
          "IndikatorPeriodeId": 18,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 44,
          "IndikatorPeriodeId": 19,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 45,
          "IndikatorPeriodeId": 20,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 46,
          "IndikatorPeriodeId": 21,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 47,
          "IndikatorPeriodeId": 22,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 48,
          "IndikatorPeriodeId": 24,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 49,
          "IndikatorPeriodeId": 25,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 50,
          "IndikatorPeriodeId": 26,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 51,
          "IndikatorPeriodeId": 27,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 52,
          "IndikatorPeriodeId": 28,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 53,
          "IndikatorPeriodeId": 29,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 54,
          "IndikatorPeriodeId": 32,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 55,
          "IndikatorPeriodeId": 33,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 56,
          "IndikatorPeriodeId": 34,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 57,
          "IndikatorPeriodeId": 35,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 58,
          "IndikatorPeriodeId": 36,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 59,
          "IndikatorPeriodeId": 38,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 60,
          "IndikatorPeriodeId": 40,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 61,
          "IndikatorPeriodeId": 41,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 62,
          "IndikatorPeriodeId": 42,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 63,
          "IndikatorPeriodeId": 43,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 64,
          "IndikatorPeriodeId": 44,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 65,
          "IndikatorPeriodeId": 51,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 66,
          "IndikatorPeriodeId": 53,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 67,
          "IndikatorPeriodeId": 55,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 68,
          "IndikatorPeriodeId": 56,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 69,
          "IndikatorPeriodeId": 57,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 70,
          "IndikatorPeriodeId": 58,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 71,
          "IndikatorPeriodeId": 65,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 72,
          "IndikatorPeriodeId": 75,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 73,
          "IndikatorPeriodeId": 76,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 74,
          "IndikatorPeriodeId": 77,
          "SatKerId": "067F74F3-1D3D-4AE5-99A5-BE7DC5794346",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 75,
          "IndikatorPeriodeId": 1,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 76,
          "IndikatorPeriodeId": 4,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 77,
          "IndikatorPeriodeId": 6,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 78,
          "IndikatorPeriodeId": 7,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 79,
          "IndikatorPeriodeId": 10,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 80,
          "IndikatorPeriodeId": 11,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0294,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 81,
          "IndikatorPeriodeId": 12,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0294,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 82,
          "IndikatorPeriodeId": 13,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 83,
          "IndikatorPeriodeId": 14,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 84,
          "IndikatorPeriodeId": 18,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 85,
          "IndikatorPeriodeId": 19,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 86,
          "IndikatorPeriodeId": 20,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0221,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 87,
          "IndikatorPeriodeId": 21,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0221,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 88,
          "IndikatorPeriodeId": 22,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 89,
          "IndikatorPeriodeId": 24,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 90,
          "IndikatorPeriodeId": 25,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 91,
          "IndikatorPeriodeId": 26,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 92,
          "IndikatorPeriodeId": 27,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0147,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 93,
          "IndikatorPeriodeId": 28,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0147,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 94,
          "IndikatorPeriodeId": 29,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 95,
          "IndikatorPeriodeId": 32,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 96,
          "IndikatorPeriodeId": 33,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 97,
          "IndikatorPeriodeId": 34,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 98,
          "IndikatorPeriodeId": 35,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 99,
          "IndikatorPeriodeId": 36,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 100,
          "IndikatorPeriodeId": 38,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 101,
          "IndikatorPeriodeId": 40,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 102,
          "IndikatorPeriodeId": 41,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 103,
          "IndikatorPeriodeId": 42,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 104,
          "IndikatorPeriodeId": 43,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0331,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 105,
          "IndikatorPeriodeId": 44,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 106,
          "IndikatorPeriodeId": 53,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 107,
          "IndikatorPeriodeId": 55,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0221,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 108,
          "IndikatorPeriodeId": 56,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 109,
          "IndikatorPeriodeId": 57,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 110,
          "IndikatorPeriodeId": 58,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0184,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 111,
          "IndikatorPeriodeId": 65,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 112,
          "IndikatorPeriodeId": 75,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 113,
          "IndikatorPeriodeId": 76,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 114,
          "IndikatorPeriodeId": 77,
          "SatKerId": "99F05421-F893-4226-A415-3A8E17EADE38",
          "bobot": 0.0221,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 115,
          "IndikatorPeriodeId": 1,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.0903,
          "capaian": 0.0903,
          "lastUpdate": new Date()
        },
        {
          "id": 116,
          "IndikatorPeriodeId": 4,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 117,
          "IndikatorPeriodeId": 6,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 118,
          "IndikatorPeriodeId": 7,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 119,
          "IndikatorPeriodeId": 10,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 120,
          "IndikatorPeriodeId": 11,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0319,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 121,
          "IndikatorPeriodeId": 12,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 122,
          "IndikatorPeriodeId": 13,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 123,
          "IndikatorPeriodeId": 14,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 124,
          "IndikatorPeriodeId": 18,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 125,
          "IndikatorPeriodeId": 19,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 126,
          "IndikatorPeriodeId": 21,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 127,
          "IndikatorPeriodeId": 22,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 128,
          "IndikatorPeriodeId": 24,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 129,
          "IndikatorPeriodeId": 25,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 130,
          "IndikatorPeriodeId": 26,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 131,
          "IndikatorPeriodeId": 27,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0159,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 132,
          "IndikatorPeriodeId": 28,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0159,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 133,
          "IndikatorPeriodeId": 29,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 134,
          "IndikatorPeriodeId": 32,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 135,
          "IndikatorPeriodeId": 33,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 136,
          "IndikatorPeriodeId": 34,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 137,
          "IndikatorPeriodeId": 35,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 138,
          "IndikatorPeriodeId": 36,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 139,
          "IndikatorPeriodeId": 38,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 140,
          "IndikatorPeriodeId": 40,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 141,
          "IndikatorPeriodeId": 41,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 142,
          "IndikatorPeriodeId": 43,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 143,
          "IndikatorPeriodeId": 44,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 144,
          "IndikatorPeriodeId": 53,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 145,
          "IndikatorPeriodeId": 56,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 146,
          "IndikatorPeriodeId": 57,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 147,
          "IndikatorPeriodeId": 58,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 148,
          "IndikatorPeriodeId": 65,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 149,
          "IndikatorPeriodeId": 75,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 150,
          "IndikatorPeriodeId": 76,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 151,
          "IndikatorPeriodeId": 77,
          "SatKerId": "747B77BD-9098-447A-9AF6-E2994BE53645",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 152,
          "IndikatorPeriodeId": 6,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 153,
          "IndikatorPeriodeId": 7,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 1.4511,
          "capaian": 1.4511,
          "lastUpdate": new Date()
        },
        {
          "id": 154,
          "IndikatorPeriodeId": 10,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 155,
          "IndikatorPeriodeId": 11,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.70,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 156,
          "IndikatorPeriodeId": 12,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.70,
          "target": 0.01,
          "capaian": 0.01,
          "lastUpdate": new Date()
        },
        {
          "id": 157,
          "IndikatorPeriodeId": 13,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 158,
          "IndikatorPeriodeId": 14,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 0.37,
          "capaian": 0.37,
          "lastUpdate": new Date()
        },
        {
          "id": 159,
          "IndikatorPeriodeId": 18,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 2.63,
          "capaian": 2.63,
          "lastUpdate": new Date()
        },
        {
          "id": 160,
          "IndikatorPeriodeId": 19,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 0.5,
          "capaian": 0.5,
          "lastUpdate": new Date()
        },
        {
          "id": 161,
          "IndikatorPeriodeId": 21,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.78,
          "target": 0.03,
          "capaian": 0.03,
          "lastUpdate": new Date()
        },
        {
          "id": 162,
          "IndikatorPeriodeId": 24,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 1.15,
          "capaian": 1.15,
          "lastUpdate": new Date()
        },
        {
          "id": 163,
          "IndikatorPeriodeId": 26,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 0.3,
          "capaian": 0.3,
          "lastUpdate": new Date()
        },
        {
          "id": 164,
          "IndikatorPeriodeId": 27,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 1.85,
          "target": 3.84,
          "capaian": 3.84,
          "lastUpdate": new Date()
        },
        {
          "id": 165,
          "IndikatorPeriodeId": 28,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 1.85,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 166,
          "IndikatorPeriodeId": 29,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 167,
          "IndikatorPeriodeId": 32,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 0.01,
          "capaian": 0.01,
          "lastUpdate": new Date()
        },
        {
          "id": 168,
          "IndikatorPeriodeId": 33,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 169,
          "IndikatorPeriodeId": 34,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 170,
          "IndikatorPeriodeId": 35,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 3.39,
          "capaian": 3.39,
          "lastUpdate": new Date()
        },
        {
          "id": 171,
          "IndikatorPeriodeId": 36,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 0.11,
          "capaian": 0.11,
          "lastUpdate": new Date()
        },
        {
          "id": 172,
          "IndikatorPeriodeId": 38,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 0.04,
          "capaian": 0.04,
          "lastUpdate": new Date()
        },
        {
          "id": 173,
          "IndikatorPeriodeId": 40,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 0.23,
          "capaian": 0.23,
          "lastUpdate": new Date()
        },
        {
          "id": 174,
          "IndikatorPeriodeId": 41,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 175,
          "IndikatorPeriodeId": 43,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 4.17,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 176,
          "IndikatorPeriodeId": 44,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 2.2581,
          "capaian": 2.2581,
          "lastUpdate": new Date()
        },
        {
          "id": 177,
          "IndikatorPeriodeId": 56,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 0.81,
          "capaian": 0.81,
          "lastUpdate": new Date()
        },
        {
          "id": 178,
          "IndikatorPeriodeId": 57,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 179,
          "IndikatorPeriodeId": 58,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.31,
          "target": 0.16,
          "capaian": 0.16,
          "lastUpdate": new Date()
        },
        {
          "id": 180,
          "IndikatorPeriodeId": 65,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 181,
          "IndikatorPeriodeId": 75,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 182,
          "IndikatorPeriodeId": 76,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 3.24,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 183,
          "IndikatorPeriodeId": 77,
          "SatKerId": "9955FC2D-3203-4B08-AEFC-31DC69B01F19",
          "bobot": 2.78,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 184,
          "IndikatorPeriodeId": 1,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 185,
          "IndikatorPeriodeId": 4,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 186,
          "IndikatorPeriodeId": 6,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 187,
          "IndikatorPeriodeId": 7,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 188,
          "IndikatorPeriodeId": 10,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 189,
          "IndikatorPeriodeId": 11,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0319,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 190,
          "IndikatorPeriodeId": 12,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 191,
          "IndikatorPeriodeId": 13,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 192,
          "IndikatorPeriodeId": 14,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 193,
          "IndikatorPeriodeId": 18,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 194,
          "IndikatorPeriodeId": 19,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 195,
          "IndikatorPeriodeId": 21,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 196,
          "IndikatorPeriodeId": 22,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 197,
          "IndikatorPeriodeId": 24,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 198,
          "IndikatorPeriodeId": 25,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 199,
          "IndikatorPeriodeId": 26,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 200,
          "IndikatorPeriodeId": 27,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0159,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 201,
          "IndikatorPeriodeId": 28,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0159,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 202,
          "IndikatorPeriodeId": 29,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 203,
          "IndikatorPeriodeId": 32,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 204,
          "IndikatorPeriodeId": 33,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 205,
          "IndikatorPeriodeId": 34,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 206,
          "IndikatorPeriodeId": 35,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 207,
          "IndikatorPeriodeId": 36,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 208,
          "IndikatorPeriodeId": 38,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 209,
          "IndikatorPeriodeId": 40,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 210,
          "IndikatorPeriodeId": 41,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 211,
          "IndikatorPeriodeId": 43,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 212,
          "IndikatorPeriodeId": 44,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 213,
          "IndikatorPeriodeId": 53,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 214,
          "IndikatorPeriodeId": 56,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 215,
          "IndikatorPeriodeId": 57,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 216,
          "IndikatorPeriodeId": 58,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 217,
          "IndikatorPeriodeId": 65,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 218,
          "IndikatorPeriodeId": 75,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 219,
          "IndikatorPeriodeId": 76,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 220,
          "IndikatorPeriodeId": 77,
          "SatKerId": "1F95AF34-4842-4591-B5C3-DCDC3D79B0BF",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 221,
          "IndikatorPeriodeId": 1,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 222,
          "IndikatorPeriodeId": 4,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 223,
          "IndikatorPeriodeId": 6,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 224,
          "IndikatorPeriodeId": 7,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 225,
          "IndikatorPeriodeId": 10,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 226,
          "IndikatorPeriodeId": 11,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 227,
          "IndikatorPeriodeId": 12,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 228,
          "IndikatorPeriodeId": 13,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 229,
          "IndikatorPeriodeId": 14,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 230,
          "IndikatorPeriodeId": 16,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 231,
          "IndikatorPeriodeId": 18,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 232,
          "IndikatorPeriodeId": 19,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 233,
          "IndikatorPeriodeId": 20,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 234,
          "IndikatorPeriodeId": 21,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 235,
          "IndikatorPeriodeId": 22,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 236,
          "IndikatorPeriodeId": 24,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 237,
          "IndikatorPeriodeId": 25,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 238,
          "IndikatorPeriodeId": 26,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 239,
          "IndikatorPeriodeId": 27,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 240,
          "IndikatorPeriodeId": 28,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 241,
          "IndikatorPeriodeId": 29,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 242,
          "IndikatorPeriodeId": 32,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 243,
          "IndikatorPeriodeId": 33,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 244,
          "IndikatorPeriodeId": 34,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 245,
          "IndikatorPeriodeId": 35,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 246,
          "IndikatorPeriodeId": 36,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 247,
          "IndikatorPeriodeId": 38,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 248,
          "IndikatorPeriodeId": 40,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 249,
          "IndikatorPeriodeId": 41,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 250,
          "IndikatorPeriodeId": 42,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 251,
          "IndikatorPeriodeId": 43,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 252,
          "IndikatorPeriodeId": 44,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 253,
          "IndikatorPeriodeId": 51,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 254,
          "IndikatorPeriodeId": 53,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 255,
          "IndikatorPeriodeId": 55,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 256,
          "IndikatorPeriodeId": 56,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 257,
          "IndikatorPeriodeId": 57,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 258,
          "IndikatorPeriodeId": 58,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 259,
          "IndikatorPeriodeId": 65,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 260,
          "IndikatorPeriodeId": 75,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 261,
          "IndikatorPeriodeId": 76,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 262,
          "IndikatorPeriodeId": 77,
          "SatKerId": "399F1740-C3B3-4B17-9CC8-A6530656F41B",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 263,
          "IndikatorPeriodeId": 1,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 264,
          "IndikatorPeriodeId": 4,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 265,
          "IndikatorPeriodeId": 6,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 266,
          "IndikatorPeriodeId": 7,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 267,
          "IndikatorPeriodeId": 10,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 268,
          "IndikatorPeriodeId": 11,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 269,
          "IndikatorPeriodeId": 12,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 270,
          "IndikatorPeriodeId": 13,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 271,
          "IndikatorPeriodeId": 14,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 272,
          "IndikatorPeriodeId": 16,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 273,
          "IndikatorPeriodeId": 18,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 274,
          "IndikatorPeriodeId": 19,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 275,
          "IndikatorPeriodeId": 20,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 276,
          "IndikatorPeriodeId": 21,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 277,
          "IndikatorPeriodeId": 22,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 278,
          "IndikatorPeriodeId": 24,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 279,
          "IndikatorPeriodeId": 25,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 280,
          "IndikatorPeriodeId": 26,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 281,
          "IndikatorPeriodeId": 27,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 282,
          "IndikatorPeriodeId": 28,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 283,
          "IndikatorPeriodeId": 29,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 284,
          "IndikatorPeriodeId": 32,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 285,
          "IndikatorPeriodeId": 33,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 286,
          "IndikatorPeriodeId": 34,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 287,
          "IndikatorPeriodeId": 35,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 288,
          "IndikatorPeriodeId": 36,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 289,
          "IndikatorPeriodeId": 38,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 290,
          "IndikatorPeriodeId": 40,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 291,
          "IndikatorPeriodeId": 41,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 292,
          "IndikatorPeriodeId": 42,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 293,
          "IndikatorPeriodeId": 43,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 294,
          "IndikatorPeriodeId": 44,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 295,
          "IndikatorPeriodeId": 51,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 296,
          "IndikatorPeriodeId": 53,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 297,
          "IndikatorPeriodeId": 55,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 298,
          "IndikatorPeriodeId": 56,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 299,
          "IndikatorPeriodeId": 57,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 300,
          "IndikatorPeriodeId": 58,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 301,
          "IndikatorPeriodeId": 65,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 302,
          "IndikatorPeriodeId": 75,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 303,
          "IndikatorPeriodeId": 76,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 304,
          "IndikatorPeriodeId": 77,
          "SatKerId": "E473B3F3-A86B-45C3-8041-1ED11A37D63F",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 305,
          "IndikatorPeriodeId": 1,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 306,
          "IndikatorPeriodeId": 4,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 307,
          "IndikatorPeriodeId": 6,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 308,
          "IndikatorPeriodeId": 7,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 309,
          "IndikatorPeriodeId": 10,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 310,
          "IndikatorPeriodeId": 11,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0319,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 311,
          "IndikatorPeriodeId": 12,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 312,
          "IndikatorPeriodeId": 13,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 313,
          "IndikatorPeriodeId": 14,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 314,
          "IndikatorPeriodeId": 18,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 315,
          "IndikatorPeriodeId": 19,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 316,
          "IndikatorPeriodeId": 21,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 317,
          "IndikatorPeriodeId": 22,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 318,
          "IndikatorPeriodeId": 24,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 319,
          "IndikatorPeriodeId": 25,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 320,
          "IndikatorPeriodeId": 26,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 321,
          "IndikatorPeriodeId": 27,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0159,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 322,
          "IndikatorPeriodeId": 28,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0159,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 323,
          "IndikatorPeriodeId": 29,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 324,
          "IndikatorPeriodeId": 32,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 325,
          "IndikatorPeriodeId": 33,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 326,
          "IndikatorPeriodeId": 34,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 327,
          "IndikatorPeriodeId": 35,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 328,
          "IndikatorPeriodeId": 36,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 329,
          "IndikatorPeriodeId": 38,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 330,
          "IndikatorPeriodeId": 40,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 331,
          "IndikatorPeriodeId": 41,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 332,
          "IndikatorPeriodeId": 43,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 333,
          "IndikatorPeriodeId": 44,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 334,
          "IndikatorPeriodeId": 53,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 335,
          "IndikatorPeriodeId": 56,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 336,
          "IndikatorPeriodeId": 57,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 337,
          "IndikatorPeriodeId": 58,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 338,
          "IndikatorPeriodeId": 65,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 339,
          "IndikatorPeriodeId": 75,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 340,
          "IndikatorPeriodeId": 76,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 341,
          "IndikatorPeriodeId": 77,
          "SatKerId": "56F09E6A-9351-4BEE-9A5A-47189DA05DB7",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 342,
          "IndikatorPeriodeId": 1,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 343,
          "IndikatorPeriodeId": 4,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 344,
          "IndikatorPeriodeId": 6,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 345,
          "IndikatorPeriodeId": 7,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 346,
          "IndikatorPeriodeId": 10,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 347,
          "IndikatorPeriodeId": 12,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0365,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 348,
          "IndikatorPeriodeId": 14,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 349,
          "IndikatorPeriodeId": 18,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 350,
          "IndikatorPeriodeId": 19,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 351,
          "IndikatorPeriodeId": 20,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0274,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 352,
          "IndikatorPeriodeId": 21,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0274,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 353,
          "IndikatorPeriodeId": 24,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 354,
          "IndikatorPeriodeId": 25,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 355,
          "IndikatorPeriodeId": 26,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 356,
          "IndikatorPeriodeId": 32,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 357,
          "IndikatorPeriodeId": 33,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 358,
          "IndikatorPeriodeId": 34,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 359,
          "IndikatorPeriodeId": 35,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 360,
          "IndikatorPeriodeId": 36,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 361,
          "IndikatorPeriodeId": 38,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 362,
          "IndikatorPeriodeId": 41,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 363,
          "IndikatorPeriodeId": 42,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 364,
          "IndikatorPeriodeId": 43,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0411,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 365,
          "IndikatorPeriodeId": 44,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 366,
          "IndikatorPeriodeId": 55,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0274,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 367,
          "IndikatorPeriodeId": 56,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 368,
          "IndikatorPeriodeId": 57,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 369,
          "IndikatorPeriodeId": 58,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0228,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 370,
          "IndikatorPeriodeId": 65,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 371,
          "IndikatorPeriodeId": 75,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 372,
          "IndikatorPeriodeId": 76,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.032,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 373,
          "IndikatorPeriodeId": 77,
          "SatKerId": "DE7AB2C6-D399-42A8-8F4A-FFB381D15E1B",
          "bobot": 0.0274,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 374,
          "IndikatorPeriodeId": 1,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 375,
          "IndikatorPeriodeId": 4,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 376,
          "IndikatorPeriodeId": 6,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 377,
          "IndikatorPeriodeId": 7,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 378,
          "IndikatorPeriodeId": 10,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 379,
          "IndikatorPeriodeId": 11,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 380,
          "IndikatorPeriodeId": 12,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 381,
          "IndikatorPeriodeId": 13,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 382,
          "IndikatorPeriodeId": 14,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 383,
          "IndikatorPeriodeId": 16,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 384,
          "IndikatorPeriodeId": 18,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 385,
          "IndikatorPeriodeId": 19,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 386,
          "IndikatorPeriodeId": 20,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 387,
          "IndikatorPeriodeId": 21,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 388,
          "IndikatorPeriodeId": 22,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 389,
          "IndikatorPeriodeId": 24,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 390,
          "IndikatorPeriodeId": 25,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 391,
          "IndikatorPeriodeId": 26,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 392,
          "IndikatorPeriodeId": 27,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 393,
          "IndikatorPeriodeId": 28,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 394,
          "IndikatorPeriodeId": 29,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 395,
          "IndikatorPeriodeId": 32,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 396,
          "IndikatorPeriodeId": 33,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 397,
          "IndikatorPeriodeId": 34,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 398,
          "IndikatorPeriodeId": 35,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 399,
          "IndikatorPeriodeId": 36,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 400,
          "IndikatorPeriodeId": 38,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 401,
          "IndikatorPeriodeId": 40,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 402,
          "IndikatorPeriodeId": 41,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 403,
          "IndikatorPeriodeId": 42,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 404,
          "IndikatorPeriodeId": 43,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 405,
          "IndikatorPeriodeId": 44,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 406,
          "IndikatorPeriodeId": 51,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 407,
          "IndikatorPeriodeId": 53,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 408,
          "IndikatorPeriodeId": 55,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 409,
          "IndikatorPeriodeId": 56,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 410,
          "IndikatorPeriodeId": 57,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 411,
          "IndikatorPeriodeId": 58,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 412,
          "IndikatorPeriodeId": 65,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 413,
          "IndikatorPeriodeId": 75,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 414,
          "IndikatorPeriodeId": 76,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 415,
          "IndikatorPeriodeId": 77,
          "SatKerId": "21F5FACF-2500-42D0-A67A-B1F631AC92C2",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 416,
          "IndikatorPeriodeId": 1,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 417,
          "IndikatorPeriodeId": 4,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 418,
          "IndikatorPeriodeId": 6,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 419,
          "IndikatorPeriodeId": 7,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 420,
          "IndikatorPeriodeId": 10,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 421,
          "IndikatorPeriodeId": 11,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0319,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 422,
          "IndikatorPeriodeId": 12,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 423,
          "IndikatorPeriodeId": 13,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 424,
          "IndikatorPeriodeId": 14,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 425,
          "IndikatorPeriodeId": 18,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 426,
          "IndikatorPeriodeId": 19,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 427,
          "IndikatorPeriodeId": 21,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 428,
          "IndikatorPeriodeId": 22,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 429,
          "IndikatorPeriodeId": 24,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 430,
          "IndikatorPeriodeId": 25,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 431,
          "IndikatorPeriodeId": 26,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 432,
          "IndikatorPeriodeId": 27,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0159,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 433,
          "IndikatorPeriodeId": 28,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0159,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 434,
          "IndikatorPeriodeId": 29,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 435,
          "IndikatorPeriodeId": 32,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 436,
          "IndikatorPeriodeId": 33,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 437,
          "IndikatorPeriodeId": 34,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 438,
          "IndikatorPeriodeId": 35,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 439,
          "IndikatorPeriodeId": 36,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 440,
          "IndikatorPeriodeId": 38,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 441,
          "IndikatorPeriodeId": 40,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 442,
          "IndikatorPeriodeId": 41,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 443,
          "IndikatorPeriodeId": 43,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 444,
          "IndikatorPeriodeId": 44,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 445,
          "IndikatorPeriodeId": 53,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 446,
          "IndikatorPeriodeId": 56,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 447,
          "IndikatorPeriodeId": 57,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 448,
          "IndikatorPeriodeId": 58,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 449,
          "IndikatorPeriodeId": 65,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 450,
          "IndikatorPeriodeId": 75,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 451,
          "IndikatorPeriodeId": 76,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 452,
          "IndikatorPeriodeId": 77,
          "SatKerId": "0D0AE0A1-574F-4EFF-93C4-346FEEB1B56F",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 453,
          "IndikatorPeriodeId": 1,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 454,
          "IndikatorPeriodeId": 4,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 455,
          "IndikatorPeriodeId": 6,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 456,
          "IndikatorPeriodeId": 7,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 457,
          "IndikatorPeriodeId": 10,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 458,
          "IndikatorPeriodeId": 11,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0294,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 459,
          "IndikatorPeriodeId": 12,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0294,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 460,
          "IndikatorPeriodeId": 13,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 461,
          "IndikatorPeriodeId": 14,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 462,
          "IndikatorPeriodeId": 18,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 463,
          "IndikatorPeriodeId": 19,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 464,
          "IndikatorPeriodeId": 20,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0221,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 465,
          "IndikatorPeriodeId": 21,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0221,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 466,
          "IndikatorPeriodeId": 22,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 467,
          "IndikatorPeriodeId": 24,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 468,
          "IndikatorPeriodeId": 25,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 469,
          "IndikatorPeriodeId": 26,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 470,
          "IndikatorPeriodeId": 27,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0147,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 471,
          "IndikatorPeriodeId": 28,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0147,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 472,
          "IndikatorPeriodeId": 29,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 473,
          "IndikatorPeriodeId": 32,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 474,
          "IndikatorPeriodeId": 33,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 475,
          "IndikatorPeriodeId": 34,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 476,
          "IndikatorPeriodeId": 35,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 477,
          "IndikatorPeriodeId": 36,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 478,
          "IndikatorPeriodeId": 38,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 479,
          "IndikatorPeriodeId": 40,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 480,
          "IndikatorPeriodeId": 41,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 481,
          "IndikatorPeriodeId": 42,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 482,
          "IndikatorPeriodeId": 43,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0331,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 483,
          "IndikatorPeriodeId": 44,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 484,
          "IndikatorPeriodeId": 53,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 485,
          "IndikatorPeriodeId": 55,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0221,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 486,
          "IndikatorPeriodeId": 56,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 487,
          "IndikatorPeriodeId": 57,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 488,
          "IndikatorPeriodeId": 58,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0184,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 489,
          "IndikatorPeriodeId": 65,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 490,
          "IndikatorPeriodeId": 75,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 491,
          "IndikatorPeriodeId": 76,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 492,
          "IndikatorPeriodeId": 77,
          "SatKerId": "98836514-9A35-4007-8433-D2C0899E967F",
          "bobot": 0.0221,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 493,
          "IndikatorPeriodeId": 4,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 494,
          "IndikatorPeriodeId": 6,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 495,
          "IndikatorPeriodeId": 7,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 496,
          "IndikatorPeriodeId": 10,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 497,
          "IndikatorPeriodeId": 11,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0333,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 498,
          "IndikatorPeriodeId": 12,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0333,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 499,
          "IndikatorPeriodeId": 13,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 500,
          "IndikatorPeriodeId": 14,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 501,
          "IndikatorPeriodeId": 17,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 502,
          "IndikatorPeriodeId": 18,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 503,
          "IndikatorPeriodeId": 19,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 504,
          "IndikatorPeriodeId": 21,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.025,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 505,
          "IndikatorPeriodeId": 22,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 506,
          "IndikatorPeriodeId": 24,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 507,
          "IndikatorPeriodeId": 25,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 508,
          "IndikatorPeriodeId": 26,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 509,
          "IndikatorPeriodeId": 27,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0167,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 510,
          "IndikatorPeriodeId": 28,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0167,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 511,
          "IndikatorPeriodeId": 29,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 512,
          "IndikatorPeriodeId": 32,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 513,
          "IndikatorPeriodeId": 33,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 514,
          "IndikatorPeriodeId": 34,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 515,
          "IndikatorPeriodeId": 35,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 516,
          "IndikatorPeriodeId": 36,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 517,
          "IndikatorPeriodeId": 38,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 518,
          "IndikatorPeriodeId": 41,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 519,
          "IndikatorPeriodeId": 43,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0375,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 520,
          "IndikatorPeriodeId": 44,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 521,
          "IndikatorPeriodeId": 53,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 522,
          "IndikatorPeriodeId": 56,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 523,
          "IndikatorPeriodeId": 57,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 524,
          "IndikatorPeriodeId": 58,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0208,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 525,
          "IndikatorPeriodeId": 65,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 526,
          "IndikatorPeriodeId": 75,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 527,
          "IndikatorPeriodeId": 76,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 528,
          "IndikatorPeriodeId": 77,
          "SatKerId": "FAB0153C-8B30-4659-B50F-9081DCFB0BC6",
          "bobot": 0.025,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 529,
          "IndikatorPeriodeId": 1,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 530,
          "IndikatorPeriodeId": 4,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 531,
          "IndikatorPeriodeId": 6,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 532,
          "IndikatorPeriodeId": 7,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 533,
          "IndikatorPeriodeId": 10,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 534,
          "IndikatorPeriodeId": 11,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 535,
          "IndikatorPeriodeId": 12,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 536,
          "IndikatorPeriodeId": 13,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 537,
          "IndikatorPeriodeId": 14,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 538,
          "IndikatorPeriodeId": 16,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 539,
          "IndikatorPeriodeId": 18,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 540,
          "IndikatorPeriodeId": 19,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 541,
          "IndikatorPeriodeId": 20,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 542,
          "IndikatorPeriodeId": 21,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 543,
          "IndikatorPeriodeId": 22,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 544,
          "IndikatorPeriodeId": 24,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 545,
          "IndikatorPeriodeId": 25,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 546,
          "IndikatorPeriodeId": 26,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 547,
          "IndikatorPeriodeId": 27,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 548,
          "IndikatorPeriodeId": 28,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 549,
          "IndikatorPeriodeId": 29,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 550,
          "IndikatorPeriodeId": 32,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 551,
          "IndikatorPeriodeId": 33,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 552,
          "IndikatorPeriodeId": 34,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 553,
          "IndikatorPeriodeId": 35,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 554,
          "IndikatorPeriodeId": 36,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 555,
          "IndikatorPeriodeId": 38,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 556,
          "IndikatorPeriodeId": 40,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 557,
          "IndikatorPeriodeId": 41,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 558,
          "IndikatorPeriodeId": 42,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 559,
          "IndikatorPeriodeId": 43,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 560,
          "IndikatorPeriodeId": 44,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 561,
          "IndikatorPeriodeId": 51,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 562,
          "IndikatorPeriodeId": 53,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 563,
          "IndikatorPeriodeId": 55,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 564,
          "IndikatorPeriodeId": 56,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 565,
          "IndikatorPeriodeId": 57,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 566,
          "IndikatorPeriodeId": 58,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 567,
          "IndikatorPeriodeId": 65,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 568,
          "IndikatorPeriodeId": 75,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 569,
          "IndikatorPeriodeId": 76,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 570,
          "IndikatorPeriodeId": 77,
          "SatKerId": "AE9D1371-CF41-40A7-93E3-7D7D495F6F7C",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 571,
          "IndikatorPeriodeId": 6,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 572,
          "IndikatorPeriodeId": 7,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 573,
          "IndikatorPeriodeId": 10,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 574,
          "IndikatorPeriodeId": 11,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.037,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 575,
          "IndikatorPeriodeId": 12,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.037,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 576,
          "IndikatorPeriodeId": 13,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 577,
          "IndikatorPeriodeId": 14,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 578,
          "IndikatorPeriodeId": 18,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 579,
          "IndikatorPeriodeId": 19,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 580,
          "IndikatorPeriodeId": 21,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0278,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 581,
          "IndikatorPeriodeId": 24,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 582,
          "IndikatorPeriodeId": 26,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 583,
          "IndikatorPeriodeId": 27,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0185,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 584,
          "IndikatorPeriodeId": 28,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0185,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 585,
          "IndikatorPeriodeId": 29,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 586,
          "IndikatorPeriodeId": 32,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 587,
          "IndikatorPeriodeId": 33,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 588,
          "IndikatorPeriodeId": 34,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 589,
          "IndikatorPeriodeId": 35,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 590,
          "IndikatorPeriodeId": 36,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 591,
          "IndikatorPeriodeId": 38,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 592,
          "IndikatorPeriodeId": 40,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 593,
          "IndikatorPeriodeId": 41,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 594,
          "IndikatorPeriodeId": 43,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0417,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 595,
          "IndikatorPeriodeId": 44,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 596,
          "IndikatorPeriodeId": 56,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 597,
          "IndikatorPeriodeId": 57,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 598,
          "IndikatorPeriodeId": 58,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0231,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 599,
          "IndikatorPeriodeId": 65,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 600,
          "IndikatorPeriodeId": 75,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 601,
          "IndikatorPeriodeId": 76,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0324,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 602,
          "IndikatorPeriodeId": 77,
          "SatKerId": "A68DF11A-08D4-42E7-B878-5730B1B5B4E9",
          "bobot": 0.0278,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 603,
          "IndikatorPeriodeId": 1,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.0903,
          "capaian": 0.0903,
          "lastUpdate": new Date()
        },
        {
          "id": 604,
          "IndikatorPeriodeId": 4,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 605,
          "IndikatorPeriodeId": 6,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 606,
          "IndikatorPeriodeId": 7,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 607,
          "IndikatorPeriodeId": 10,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 608,
          "IndikatorPeriodeId": 11,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0319,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 609,
          "IndikatorPeriodeId": 12,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 610,
          "IndikatorPeriodeId": 13,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 611,
          "IndikatorPeriodeId": 14,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 612,
          "IndikatorPeriodeId": 18,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 613,
          "IndikatorPeriodeId": 19,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 614,
          "IndikatorPeriodeId": 21,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 615,
          "IndikatorPeriodeId": 22,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 616,
          "IndikatorPeriodeId": 24,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 617,
          "IndikatorPeriodeId": 25,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 618,
          "IndikatorPeriodeId": 26,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 619,
          "IndikatorPeriodeId": 27,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0159,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 620,
          "IndikatorPeriodeId": 28,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0159,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 621,
          "IndikatorPeriodeId": 29,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 622,
          "IndikatorPeriodeId": 32,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 623,
          "IndikatorPeriodeId": 33,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 624,
          "IndikatorPeriodeId": 34,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 625,
          "IndikatorPeriodeId": 35,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 626,
          "IndikatorPeriodeId": 36,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 627,
          "IndikatorPeriodeId": 38,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 628,
          "IndikatorPeriodeId": 40,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 629,
          "IndikatorPeriodeId": 41,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 630,
          "IndikatorPeriodeId": 43,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 631,
          "IndikatorPeriodeId": 44,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 632,
          "IndikatorPeriodeId": 53,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 633,
          "IndikatorPeriodeId": 56,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 634,
          "IndikatorPeriodeId": 57,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 635,
          "IndikatorPeriodeId": 58,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 636,
          "IndikatorPeriodeId": 65,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 637,
          "IndikatorPeriodeId": 75,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 638,
          "IndikatorPeriodeId": 76,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 639,
          "IndikatorPeriodeId": 77,
          "SatKerId": "D12AE12C-BB63-40CF-A7DF-8E831F30A621",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 640,
          "IndikatorPeriodeId": 4,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 641,
          "IndikatorPeriodeId": 6,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 642,
          "IndikatorPeriodeId": 7,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 643,
          "IndikatorPeriodeId": 10,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 644,
          "IndikatorPeriodeId": 11,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0333,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 645,
          "IndikatorPeriodeId": 12,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0333,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 646,
          "IndikatorPeriodeId": 13,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 647,
          "IndikatorPeriodeId": 14,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 648,
          "IndikatorPeriodeId": 17,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 649,
          "IndikatorPeriodeId": 18,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 650,
          "IndikatorPeriodeId": 19,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 651,
          "IndikatorPeriodeId": 21,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.025,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 652,
          "IndikatorPeriodeId": 22,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 653,
          "IndikatorPeriodeId": 24,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 654,
          "IndikatorPeriodeId": 25,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 655,
          "IndikatorPeriodeId": 26,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 656,
          "IndikatorPeriodeId": 27,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0167,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 657,
          "IndikatorPeriodeId": 28,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0167,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 658,
          "IndikatorPeriodeId": 29,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 659,
          "IndikatorPeriodeId": 32,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 660,
          "IndikatorPeriodeId": 33,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 661,
          "IndikatorPeriodeId": 34,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 662,
          "IndikatorPeriodeId": 35,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 663,
          "IndikatorPeriodeId": 36,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 664,
          "IndikatorPeriodeId": 38,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 665,
          "IndikatorPeriodeId": 41,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 666,
          "IndikatorPeriodeId": 43,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0375,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 667,
          "IndikatorPeriodeId": 44,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 668,
          "IndikatorPeriodeId": 53,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 669,
          "IndikatorPeriodeId": 56,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 670,
          "IndikatorPeriodeId": 57,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 671,
          "IndikatorPeriodeId": 58,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0208,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 672,
          "IndikatorPeriodeId": 65,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 673,
          "IndikatorPeriodeId": 75,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 674,
          "IndikatorPeriodeId": 76,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 675,
          "IndikatorPeriodeId": 77,
          "SatKerId": "583057BB-7885-469E-A908-8734472EC3C5",
          "bobot": 0.025,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 676,
          "IndikatorPeriodeId": 1,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.3613,
          "capaian": 0.3613,
          "lastUpdate": new Date()
        },
        {
          "id": 677,
          "IndikatorPeriodeId": 4,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 678,
          "IndikatorPeriodeId": 6,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 679,
          "IndikatorPeriodeId": 7,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 680,
          "IndikatorPeriodeId": 10,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 681,
          "IndikatorPeriodeId": 11,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.028,
          "target": 7,
          "capaian": 7,
          "lastUpdate": new Date()
        },
        {
          "id": 682,
          "IndikatorPeriodeId": 12,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 683,
          "IndikatorPeriodeId": 13,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 10.839,
          "capaian": 10.839,
          "lastUpdate": new Date()
        },
        {
          "id": 684,
          "IndikatorPeriodeId": 14,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 685,
          "IndikatorPeriodeId": 16,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 686,
          "IndikatorPeriodeId": 18,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 687,
          "IndikatorPeriodeId": 19,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 688,
          "IndikatorPeriodeId": 20,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 689,
          "IndikatorPeriodeId": 21,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 690,
          "IndikatorPeriodeId": 22,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 691,
          "IndikatorPeriodeId": 24,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 692,
          "IndikatorPeriodeId": 25,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 693,
          "IndikatorPeriodeId": 26,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 694,
          "IndikatorPeriodeId": 27,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.014,
          "target": 153.548,
          "capaian": 153.548,
          "lastUpdate": new Date()
        },
        {
          "id": 695,
          "IndikatorPeriodeId": 28,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.014,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 696,
          "IndikatorPeriodeId": 29,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 697,
          "IndikatorPeriodeId": 32,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 698,
          "IndikatorPeriodeId": 33,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 699,
          "IndikatorPeriodeId": 34,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 700,
          "IndikatorPeriodeId": 35,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 135.484,
          "capaian": 135.484,
          "lastUpdate": new Date()
        },
        {
          "id": 701,
          "IndikatorPeriodeId": 36,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 702,
          "IndikatorPeriodeId": 38,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 703,
          "IndikatorPeriodeId": 40,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 704,
          "IndikatorPeriodeId": 41,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 705,
          "IndikatorPeriodeId": 42,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 706,
          "IndikatorPeriodeId": 43,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 707,
          "IndikatorPeriodeId": 44,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 90.323,
          "capaian": 90.323,
          "lastUpdate": new Date()
        },
        {
          "id": 708,
          "IndikatorPeriodeId": 51,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 709,
          "IndikatorPeriodeId": 53,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 710,
          "IndikatorPeriodeId": 55,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 711,
          "IndikatorPeriodeId": 56,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 712,
          "IndikatorPeriodeId": 57,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 713,
          "IndikatorPeriodeId": 58,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 714,
          "IndikatorPeriodeId": 65,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 715,
          "IndikatorPeriodeId": 75,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 716,
          "IndikatorPeriodeId": 76,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 717,
          "IndikatorPeriodeId": 77,
          "SatKerId": "BFC13DC1-950A-452B-AF8A-2E8DD3548CE0",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 718,
          "IndikatorPeriodeId": 1,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 719,
          "IndikatorPeriodeId": 4,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 720,
          "IndikatorPeriodeId": 6,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 721,
          "IndikatorPeriodeId": 7,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 722,
          "IndikatorPeriodeId": 10,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 723,
          "IndikatorPeriodeId": 11,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 724,
          "IndikatorPeriodeId": 12,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 725,
          "IndikatorPeriodeId": 13,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 726,
          "IndikatorPeriodeId": 14,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 727,
          "IndikatorPeriodeId": 16,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 728,
          "IndikatorPeriodeId": 18,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 729,
          "IndikatorPeriodeId": 19,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 730,
          "IndikatorPeriodeId": 20,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 731,
          "IndikatorPeriodeId": 21,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 732,
          "IndikatorPeriodeId": 22,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 733,
          "IndikatorPeriodeId": 24,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 734,
          "IndikatorPeriodeId": 25,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 735,
          "IndikatorPeriodeId": 26,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 736,
          "IndikatorPeriodeId": 27,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 737,
          "IndikatorPeriodeId": 28,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 738,
          "IndikatorPeriodeId": 29,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 739,
          "IndikatorPeriodeId": 32,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 740,
          "IndikatorPeriodeId": 33,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 741,
          "IndikatorPeriodeId": 34,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 742,
          "IndikatorPeriodeId": 35,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 743,
          "IndikatorPeriodeId": 36,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 744,
          "IndikatorPeriodeId": 38,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 745,
          "IndikatorPeriodeId": 40,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 746,
          "IndikatorPeriodeId": 41,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 747,
          "IndikatorPeriodeId": 42,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 748,
          "IndikatorPeriodeId": 43,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 749,
          "IndikatorPeriodeId": 44,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 750,
          "IndikatorPeriodeId": 51,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 751,
          "IndikatorPeriodeId": 53,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 752,
          "IndikatorPeriodeId": 55,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 753,
          "IndikatorPeriodeId": 56,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 754,
          "IndikatorPeriodeId": 57,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 755,
          "IndikatorPeriodeId": 58,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 756,
          "IndikatorPeriodeId": 65,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 757,
          "IndikatorPeriodeId": 75,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 758,
          "IndikatorPeriodeId": 76,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 759,
          "IndikatorPeriodeId": 77,
          "SatKerId": "61704DE5-2E33-41DD-BC93-27622D9F5DD6",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 760,
          "IndikatorPeriodeId": 1,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 761,
          "IndikatorPeriodeId": 4,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 762,
          "IndikatorPeriodeId": 6,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 763,
          "IndikatorPeriodeId": 7,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 764,
          "IndikatorPeriodeId": 10,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 765,
          "IndikatorPeriodeId": 11,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0319,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 766,
          "IndikatorPeriodeId": 12,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 767,
          "IndikatorPeriodeId": 13,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 768,
          "IndikatorPeriodeId": 14,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 769,
          "IndikatorPeriodeId": 18,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 770,
          "IndikatorPeriodeId": 19,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 771,
          "IndikatorPeriodeId": 21,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 772,
          "IndikatorPeriodeId": 22,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 773,
          "IndikatorPeriodeId": 24,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 774,
          "IndikatorPeriodeId": 25,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 775,
          "IndikatorPeriodeId": 26,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 776,
          "IndikatorPeriodeId": 27,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0159,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 777,
          "IndikatorPeriodeId": 28,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0159,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 778,
          "IndikatorPeriodeId": 29,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 779,
          "IndikatorPeriodeId": 32,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 780,
          "IndikatorPeriodeId": 33,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 781,
          "IndikatorPeriodeId": 34,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 782,
          "IndikatorPeriodeId": 35,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 783,
          "IndikatorPeriodeId": 36,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 784,
          "IndikatorPeriodeId": 38,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 785,
          "IndikatorPeriodeId": 40,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 786,
          "IndikatorPeriodeId": 41,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 787,
          "IndikatorPeriodeId": 43,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 788,
          "IndikatorPeriodeId": 44,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 789,
          "IndikatorPeriodeId": 53,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 790,
          "IndikatorPeriodeId": 56,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 791,
          "IndikatorPeriodeId": 57,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 792,
          "IndikatorPeriodeId": 58,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 793,
          "IndikatorPeriodeId": 65,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 794,
          "IndikatorPeriodeId": 75,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 795,
          "IndikatorPeriodeId": 76,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 796,
          "IndikatorPeriodeId": 77,
          "SatKerId": "71E9F019-B4FD-446C-B0C9-4CE4F8532BAF",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 797,
          "IndikatorPeriodeId": 1,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 798,
          "IndikatorPeriodeId": 4,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 799,
          "IndikatorPeriodeId": 6,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 800,
          "IndikatorPeriodeId": 7,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 801,
          "IndikatorPeriodeId": 10,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 802,
          "IndikatorPeriodeId": 11,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0294,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 803,
          "IndikatorPeriodeId": 12,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0294,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 804,
          "IndikatorPeriodeId": 13,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 805,
          "IndikatorPeriodeId": 14,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 806,
          "IndikatorPeriodeId": 18,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 807,
          "IndikatorPeriodeId": 19,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 808,
          "IndikatorPeriodeId": 20,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0221,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 809,
          "IndikatorPeriodeId": 21,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0221,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 810,
          "IndikatorPeriodeId": 22,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 811,
          "IndikatorPeriodeId": 24,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 812,
          "IndikatorPeriodeId": 25,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 813,
          "IndikatorPeriodeId": 26,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 814,
          "IndikatorPeriodeId": 27,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0147,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 815,
          "IndikatorPeriodeId": 28,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0147,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 816,
          "IndikatorPeriodeId": 29,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 817,
          "IndikatorPeriodeId": 32,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 818,
          "IndikatorPeriodeId": 33,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 819,
          "IndikatorPeriodeId": 34,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 820,
          "IndikatorPeriodeId": 35,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 821,
          "IndikatorPeriodeId": 36,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 822,
          "IndikatorPeriodeId": 38,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 823,
          "IndikatorPeriodeId": 40,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 824,
          "IndikatorPeriodeId": 41,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 825,
          "IndikatorPeriodeId": 42,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 826,
          "IndikatorPeriodeId": 43,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0331,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 827,
          "IndikatorPeriodeId": 44,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 828,
          "IndikatorPeriodeId": 53,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 829,
          "IndikatorPeriodeId": 55,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0221,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 830,
          "IndikatorPeriodeId": 56,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 831,
          "IndikatorPeriodeId": 57,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 832,
          "IndikatorPeriodeId": 58,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0184,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 833,
          "IndikatorPeriodeId": 65,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 834,
          "IndikatorPeriodeId": 75,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 835,
          "IndikatorPeriodeId": 76,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 836,
          "IndikatorPeriodeId": 77,
          "SatKerId": "6B36C546-C953-44FC-B148-04AD0F103A72",
          "bobot": 0.0221,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 837,
          "IndikatorPeriodeId": 1,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.3613,
          "capaian": 0.3613,
          "lastUpdate": new Date()
        },
        {
          "id": 838,
          "IndikatorPeriodeId": 4,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 839,
          "IndikatorPeriodeId": 6,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 840,
          "IndikatorPeriodeId": 7,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 841,
          "IndikatorPeriodeId": 10,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 842,
          "IndikatorPeriodeId": 11,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.028,
          "target": 7,
          "capaian": 7,
          "lastUpdate": new Date()
        },
        {
          "id": 843,
          "IndikatorPeriodeId": 12,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 844,
          "IndikatorPeriodeId": 13,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 10.839,
          "capaian": 10.839,
          "lastUpdate": new Date()
        },
        {
          "id": 845,
          "IndikatorPeriodeId": 14,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 846,
          "IndikatorPeriodeId": 16,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 847,
          "IndikatorPeriodeId": 18,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 848,
          "IndikatorPeriodeId": 19,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 849,
          "IndikatorPeriodeId": 20,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 850,
          "IndikatorPeriodeId": 21,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 851,
          "IndikatorPeriodeId": 22,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 852,
          "IndikatorPeriodeId": 24,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 853,
          "IndikatorPeriodeId": 25,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 854,
          "IndikatorPeriodeId": 26,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 855,
          "IndikatorPeriodeId": 27,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.014,
          "target": 153.548,
          "capaian": 153.548,
          "lastUpdate": new Date()
        },
        {
          "id": 856,
          "IndikatorPeriodeId": 28,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.014,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 857,
          "IndikatorPeriodeId": 29,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 858,
          "IndikatorPeriodeId": 32,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 859,
          "IndikatorPeriodeId": 33,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 860,
          "IndikatorPeriodeId": 34,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 861,
          "IndikatorPeriodeId": 35,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 135.484,
          "capaian": 135.484,
          "lastUpdate": new Date()
        },
        {
          "id": 862,
          "IndikatorPeriodeId": 36,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 863,
          "IndikatorPeriodeId": 38,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 864,
          "IndikatorPeriodeId": 40,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 865,
          "IndikatorPeriodeId": 41,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 866,
          "IndikatorPeriodeId": 42,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 867,
          "IndikatorPeriodeId": 43,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 868,
          "IndikatorPeriodeId": 44,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 90.323,
          "capaian": 90.323,
          "lastUpdate": new Date()
        },
        {
          "id": 869,
          "IndikatorPeriodeId": 51,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 870,
          "IndikatorPeriodeId": 53,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 871,
          "IndikatorPeriodeId": 55,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 872,
          "IndikatorPeriodeId": 56,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 873,
          "IndikatorPeriodeId": 57,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 874,
          "IndikatorPeriodeId": 58,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 875,
          "IndikatorPeriodeId": 65,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 876,
          "IndikatorPeriodeId": 75,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 877,
          "IndikatorPeriodeId": 76,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 878,
          "IndikatorPeriodeId": 77,
          "SatKerId": "1D0C94CD-68B8-4DB4-9AAE-2D01F0C70066",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 879,
          "IndikatorPeriodeId": 4,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 880,
          "IndikatorPeriodeId": 6,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 881,
          "IndikatorPeriodeId": 7,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 882,
          "IndikatorPeriodeId": 10,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 883,
          "IndikatorPeriodeId": 11,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0333,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 884,
          "IndikatorPeriodeId": 12,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0333,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 885,
          "IndikatorPeriodeId": 13,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 886,
          "IndikatorPeriodeId": 14,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 887,
          "IndikatorPeriodeId": 17,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 888,
          "IndikatorPeriodeId": 18,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 889,
          "IndikatorPeriodeId": 19,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 890,
          "IndikatorPeriodeId": 21,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.025,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 891,
          "IndikatorPeriodeId": 22,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 892,
          "IndikatorPeriodeId": 24,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 893,
          "IndikatorPeriodeId": 25,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 894,
          "IndikatorPeriodeId": 26,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 895,
          "IndikatorPeriodeId": 27,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0167,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 896,
          "IndikatorPeriodeId": 28,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0167,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 897,
          "IndikatorPeriodeId": 29,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 898,
          "IndikatorPeriodeId": 32,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 899,
          "IndikatorPeriodeId": 33,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 900,
          "IndikatorPeriodeId": 34,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 901,
          "IndikatorPeriodeId": 35,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 902,
          "IndikatorPeriodeId": 36,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 903,
          "IndikatorPeriodeId": 38,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 904,
          "IndikatorPeriodeId": 41,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 905,
          "IndikatorPeriodeId": 43,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0375,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 906,
          "IndikatorPeriodeId": 44,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 907,
          "IndikatorPeriodeId": 53,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 908,
          "IndikatorPeriodeId": 56,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 909,
          "IndikatorPeriodeId": 57,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 910,
          "IndikatorPeriodeId": 58,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0208,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 911,
          "IndikatorPeriodeId": 65,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 912,
          "IndikatorPeriodeId": 75,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 913,
          "IndikatorPeriodeId": 76,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 914,
          "IndikatorPeriodeId": 77,
          "SatKerId": "5D802CC3-C03E-43C9-A831-F241E560B78A",
          "bobot": 0.025,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 915,
          "IndikatorPeriodeId": 4,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 916,
          "IndikatorPeriodeId": 6,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 917,
          "IndikatorPeriodeId": 7,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 918,
          "IndikatorPeriodeId": 10,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 919,
          "IndikatorPeriodeId": 11,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0333,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 920,
          "IndikatorPeriodeId": 12,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0333,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 921,
          "IndikatorPeriodeId": 13,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 922,
          "IndikatorPeriodeId": 14,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 923,
          "IndikatorPeriodeId": 17,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 924,
          "IndikatorPeriodeId": 18,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 925,
          "IndikatorPeriodeId": 19,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 926,
          "IndikatorPeriodeId": 21,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.025,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 927,
          "IndikatorPeriodeId": 22,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 928,
          "IndikatorPeriodeId": 24,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 929,
          "IndikatorPeriodeId": 25,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 930,
          "IndikatorPeriodeId": 26,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 931,
          "IndikatorPeriodeId": 27,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0167,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 932,
          "IndikatorPeriodeId": 28,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0167,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 933,
          "IndikatorPeriodeId": 29,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 934,
          "IndikatorPeriodeId": 32,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 935,
          "IndikatorPeriodeId": 33,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 936,
          "IndikatorPeriodeId": 34,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 937,
          "IndikatorPeriodeId": 35,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 938,
          "IndikatorPeriodeId": 36,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 939,
          "IndikatorPeriodeId": 38,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 940,
          "IndikatorPeriodeId": 41,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 941,
          "IndikatorPeriodeId": 43,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0375,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 942,
          "IndikatorPeriodeId": 44,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 943,
          "IndikatorPeriodeId": 53,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 944,
          "IndikatorPeriodeId": 56,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 945,
          "IndikatorPeriodeId": 57,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 946,
          "IndikatorPeriodeId": 58,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0208,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 947,
          "IndikatorPeriodeId": 65,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 948,
          "IndikatorPeriodeId": 75,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 949,
          "IndikatorPeriodeId": 76,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 950,
          "IndikatorPeriodeId": 77,
          "SatKerId": "A0364179-6B3F-415E-9050-75EBE66F14EC",
          "bobot": 0.025,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 951,
          "IndikatorPeriodeId": 1,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 952,
          "IndikatorPeriodeId": 4,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 953,
          "IndikatorPeriodeId": 6,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 954,
          "IndikatorPeriodeId": 7,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 955,
          "IndikatorPeriodeId": 10,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 956,
          "IndikatorPeriodeId": 11,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0294,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 957,
          "IndikatorPeriodeId": 12,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0294,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 958,
          "IndikatorPeriodeId": 13,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 959,
          "IndikatorPeriodeId": 14,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 960,
          "IndikatorPeriodeId": 18,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 961,
          "IndikatorPeriodeId": 19,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 962,
          "IndikatorPeriodeId": 20,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0221,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 963,
          "IndikatorPeriodeId": 21,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0221,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 964,
          "IndikatorPeriodeId": 22,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 965,
          "IndikatorPeriodeId": 24,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 966,
          "IndikatorPeriodeId": 25,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 967,
          "IndikatorPeriodeId": 26,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 968,
          "IndikatorPeriodeId": 27,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0147,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 969,
          "IndikatorPeriodeId": 28,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0147,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 970,
          "IndikatorPeriodeId": 29,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 971,
          "IndikatorPeriodeId": 32,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 972,
          "IndikatorPeriodeId": 33,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 973,
          "IndikatorPeriodeId": 34,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 974,
          "IndikatorPeriodeId": 35,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 975,
          "IndikatorPeriodeId": 36,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 976,
          "IndikatorPeriodeId": 38,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 977,
          "IndikatorPeriodeId": 40,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 978,
          "IndikatorPeriodeId": 41,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 979,
          "IndikatorPeriodeId": 42,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 980,
          "IndikatorPeriodeId": 43,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0331,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 981,
          "IndikatorPeriodeId": 44,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 982,
          "IndikatorPeriodeId": 53,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 983,
          "IndikatorPeriodeId": 55,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0221,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 984,
          "IndikatorPeriodeId": 56,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 985,
          "IndikatorPeriodeId": 57,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 986,
          "IndikatorPeriodeId": 58,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0184,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 987,
          "IndikatorPeriodeId": 65,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 988,
          "IndikatorPeriodeId": 75,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 989,
          "IndikatorPeriodeId": 76,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 990,
          "IndikatorPeriodeId": 77,
          "SatKerId": "5922B132-4BC2-4C8A-836E-55F53842C26B",
          "bobot": 0.0221,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 991,
          "IndikatorPeriodeId": 4,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 992,
          "IndikatorPeriodeId": 6,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 993,
          "IndikatorPeriodeId": 7,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 994,
          "IndikatorPeriodeId": 10,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 995,
          "IndikatorPeriodeId": 11,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0333,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 996,
          "IndikatorPeriodeId": 12,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0333,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 997,
          "IndikatorPeriodeId": 13,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 998,
          "IndikatorPeriodeId": 14,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 999,
          "IndikatorPeriodeId": 17,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1000,
          "IndikatorPeriodeId": 18,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1001,
          "IndikatorPeriodeId": 19,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1002,
          "IndikatorPeriodeId": 21,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.025,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1003,
          "IndikatorPeriodeId": 22,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1004,
          "IndikatorPeriodeId": 24,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1005,
          "IndikatorPeriodeId": 25,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1006,
          "IndikatorPeriodeId": 26,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1007,
          "IndikatorPeriodeId": 27,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0167,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 1008,
          "IndikatorPeriodeId": 28,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0167,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1009,
          "IndikatorPeriodeId": 29,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1010,
          "IndikatorPeriodeId": 32,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1011,
          "IndikatorPeriodeId": 33,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1012,
          "IndikatorPeriodeId": 34,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1013,
          "IndikatorPeriodeId": 35,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1014,
          "IndikatorPeriodeId": 36,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1015,
          "IndikatorPeriodeId": 38,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1016,
          "IndikatorPeriodeId": 41,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1017,
          "IndikatorPeriodeId": 43,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0375,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1018,
          "IndikatorPeriodeId": 44,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1019,
          "IndikatorPeriodeId": 53,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1020,
          "IndikatorPeriodeId": 56,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1021,
          "IndikatorPeriodeId": 57,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1022,
          "IndikatorPeriodeId": 58,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0208,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1023,
          "IndikatorPeriodeId": 65,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1024,
          "IndikatorPeriodeId": 75,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1025,
          "IndikatorPeriodeId": 76,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1026,
          "IndikatorPeriodeId": 77,
          "SatKerId": "ECF8FCA1-1B39-46A8-A57B-4941458C6E82",
          "bobot": 0.025,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1027,
          "IndikatorPeriodeId": 1,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.3613,
          "capaian": 0.3613,
          "lastUpdate": new Date()
        },
        {
          "id": 1028,
          "IndikatorPeriodeId": 4,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1029,
          "IndikatorPeriodeId": 6,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1030,
          "IndikatorPeriodeId": 7,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1031,
          "IndikatorPeriodeId": 10,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1032,
          "IndikatorPeriodeId": 11,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.028,
          "target": 7,
          "capaian": 7,
          "lastUpdate": new Date()
        },
        {
          "id": 1033,
          "IndikatorPeriodeId": 12,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1034,
          "IndikatorPeriodeId": 13,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 10.839,
          "capaian": 10.839,
          "lastUpdate": new Date()
        },
        {
          "id": 1035,
          "IndikatorPeriodeId": 14,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1036,
          "IndikatorPeriodeId": 16,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1037,
          "IndikatorPeriodeId": 18,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1038,
          "IndikatorPeriodeId": 19,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1039,
          "IndikatorPeriodeId": 20,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1040,
          "IndikatorPeriodeId": 21,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1041,
          "IndikatorPeriodeId": 22,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1042,
          "IndikatorPeriodeId": 24,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1043,
          "IndikatorPeriodeId": 25,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1044,
          "IndikatorPeriodeId": 26,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1045,
          "IndikatorPeriodeId": 27,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.014,
          "target": 153.548,
          "capaian": 153.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1046,
          "IndikatorPeriodeId": 28,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.014,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1047,
          "IndikatorPeriodeId": 29,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1048,
          "IndikatorPeriodeId": 32,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1049,
          "IndikatorPeriodeId": 33,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1050,
          "IndikatorPeriodeId": 34,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 1051,
          "IndikatorPeriodeId": 35,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 135.484,
          "capaian": 135.484,
          "lastUpdate": new Date()
        },
        {
          "id": 1052,
          "IndikatorPeriodeId": 36,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1053,
          "IndikatorPeriodeId": 38,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1054,
          "IndikatorPeriodeId": 40,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1055,
          "IndikatorPeriodeId": 41,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1056,
          "IndikatorPeriodeId": 42,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1057,
          "IndikatorPeriodeId": 43,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1058,
          "IndikatorPeriodeId": 44,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 90.323,
          "capaian": 90.323,
          "lastUpdate": new Date()
        },
        {
          "id": 1059,
          "IndikatorPeriodeId": 51,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1060,
          "IndikatorPeriodeId": 53,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1061,
          "IndikatorPeriodeId": 55,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1062,
          "IndikatorPeriodeId": 56,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1063,
          "IndikatorPeriodeId": 57,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1064,
          "IndikatorPeriodeId": 58,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1065,
          "IndikatorPeriodeId": 65,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1066,
          "IndikatorPeriodeId": 75,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1067,
          "IndikatorPeriodeId": 76,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1068,
          "IndikatorPeriodeId": 77,
          "SatKerId": "2590B1DF-D6EC-4968-BF05-37F8F69377C8",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1069,
          "IndikatorPeriodeId": 1,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 1070,
          "IndikatorPeriodeId": 4,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1071,
          "IndikatorPeriodeId": 6,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1072,
          "IndikatorPeriodeId": 7,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1073,
          "IndikatorPeriodeId": 10,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1074,
          "IndikatorPeriodeId": 11,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0319,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 1075,
          "IndikatorPeriodeId": 12,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1076,
          "IndikatorPeriodeId": 13,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 1077,
          "IndikatorPeriodeId": 14,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1078,
          "IndikatorPeriodeId": 18,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1079,
          "IndikatorPeriodeId": 19,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1080,
          "IndikatorPeriodeId": 21,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1081,
          "IndikatorPeriodeId": 22,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1082,
          "IndikatorPeriodeId": 24,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1083,
          "IndikatorPeriodeId": 25,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1084,
          "IndikatorPeriodeId": 26,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1085,
          "IndikatorPeriodeId": 27,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0159,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 1086,
          "IndikatorPeriodeId": 28,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0159,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1087,
          "IndikatorPeriodeId": 29,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1088,
          "IndikatorPeriodeId": 32,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1089,
          "IndikatorPeriodeId": 33,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1090,
          "IndikatorPeriodeId": 34,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1091,
          "IndikatorPeriodeId": 35,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1092,
          "IndikatorPeriodeId": 36,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1093,
          "IndikatorPeriodeId": 38,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1094,
          "IndikatorPeriodeId": 40,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1095,
          "IndikatorPeriodeId": 41,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1096,
          "IndikatorPeriodeId": 43,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1097,
          "IndikatorPeriodeId": 44,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1098,
          "IndikatorPeriodeId": 53,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1099,
          "IndikatorPeriodeId": 56,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1100,
          "IndikatorPeriodeId": 57,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1101,
          "IndikatorPeriodeId": 58,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1102,
          "IndikatorPeriodeId": 65,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1103,
          "IndikatorPeriodeId": 75,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1104,
          "IndikatorPeriodeId": 76,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1105,
          "IndikatorPeriodeId": 77,
          "SatKerId": "F1928183-3E3E-40BF-B6A3-71C4299F06E1",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1106,
          "IndikatorPeriodeId": 1,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 1107,
          "IndikatorPeriodeId": 4,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1108,
          "IndikatorPeriodeId": 6,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1109,
          "IndikatorPeriodeId": 7,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1110,
          "IndikatorPeriodeId": 10,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1111,
          "IndikatorPeriodeId": 11,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1112,
          "IndikatorPeriodeId": 12,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1113,
          "IndikatorPeriodeId": 13,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 1114,
          "IndikatorPeriodeId": 14,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1115,
          "IndikatorPeriodeId": 16,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1116,
          "IndikatorPeriodeId": 18,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1117,
          "IndikatorPeriodeId": 19,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1118,
          "IndikatorPeriodeId": 20,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1119,
          "IndikatorPeriodeId": 21,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1120,
          "IndikatorPeriodeId": 22,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1121,
          "IndikatorPeriodeId": 24,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1122,
          "IndikatorPeriodeId": 25,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1123,
          "IndikatorPeriodeId": 26,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1124,
          "IndikatorPeriodeId": 27,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1125,
          "IndikatorPeriodeId": 28,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 1126,
          "IndikatorPeriodeId": 29,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1127,
          "IndikatorPeriodeId": 32,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1128,
          "IndikatorPeriodeId": 33,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1129,
          "IndikatorPeriodeId": 34,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 1130,
          "IndikatorPeriodeId": 35,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 1131,
          "IndikatorPeriodeId": 36,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 1132,
          "IndikatorPeriodeId": 38,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1133,
          "IndikatorPeriodeId": 40,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 1134,
          "IndikatorPeriodeId": 41,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1135,
          "IndikatorPeriodeId": 42,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1136,
          "IndikatorPeriodeId": 43,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1137,
          "IndikatorPeriodeId": 44,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1138,
          "IndikatorPeriodeId": 51,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1139,
          "IndikatorPeriodeId": 53,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1140,
          "IndikatorPeriodeId": 55,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1141,
          "IndikatorPeriodeId": 56,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1142,
          "IndikatorPeriodeId": 57,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1143,
          "IndikatorPeriodeId": 58,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1144,
          "IndikatorPeriodeId": 65,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1145,
          "IndikatorPeriodeId": 75,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1146,
          "IndikatorPeriodeId": 76,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1147,
          "IndikatorPeriodeId": 77,
          "SatKerId": "48914A29-488B-47CE-944B-9F5792ADBF61",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1148,
          "IndikatorPeriodeId": 1,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 1149,
          "IndikatorPeriodeId": 4,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1150,
          "IndikatorPeriodeId": 6,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1151,
          "IndikatorPeriodeId": 7,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1152,
          "IndikatorPeriodeId": 10,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1153,
          "IndikatorPeriodeId": 11,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0294,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1154,
          "IndikatorPeriodeId": 12,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0294,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1155,
          "IndikatorPeriodeId": 13,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 1156,
          "IndikatorPeriodeId": 14,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1157,
          "IndikatorPeriodeId": 18,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1158,
          "IndikatorPeriodeId": 19,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1159,
          "IndikatorPeriodeId": 20,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0221,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1160,
          "IndikatorPeriodeId": 21,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0221,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1161,
          "IndikatorPeriodeId": 22,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1162,
          "IndikatorPeriodeId": 24,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1163,
          "IndikatorPeriodeId": 25,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1164,
          "IndikatorPeriodeId": 26,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1165,
          "IndikatorPeriodeId": 27,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0147,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1166,
          "IndikatorPeriodeId": 28,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0147,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 1167,
          "IndikatorPeriodeId": 29,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1168,
          "IndikatorPeriodeId": 32,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1169,
          "IndikatorPeriodeId": 33,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1170,
          "IndikatorPeriodeId": 34,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 1171,
          "IndikatorPeriodeId": 35,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 1172,
          "IndikatorPeriodeId": 36,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 1173,
          "IndikatorPeriodeId": 38,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1174,
          "IndikatorPeriodeId": 40,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 1175,
          "IndikatorPeriodeId": 41,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1176,
          "IndikatorPeriodeId": 42,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1177,
          "IndikatorPeriodeId": 43,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0331,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1178,
          "IndikatorPeriodeId": 44,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1179,
          "IndikatorPeriodeId": 53,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1180,
          "IndikatorPeriodeId": 55,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0221,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1181,
          "IndikatorPeriodeId": 56,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1182,
          "IndikatorPeriodeId": 57,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1183,
          "IndikatorPeriodeId": 58,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0184,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1184,
          "IndikatorPeriodeId": 65,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1185,
          "IndikatorPeriodeId": 75,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1186,
          "IndikatorPeriodeId": 76,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0257,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1187,
          "IndikatorPeriodeId": 77,
          "SatKerId": "D04E9EC3-620D-401E-977E-5E9213DC48BC",
          "bobot": 0.0221,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1188,
          "IndikatorPeriodeId": 4,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1189,
          "IndikatorPeriodeId": 6,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1190,
          "IndikatorPeriodeId": 7,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1191,
          "IndikatorPeriodeId": 10,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1192,
          "IndikatorPeriodeId": 11,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0333,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 1193,
          "IndikatorPeriodeId": 12,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0333,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1194,
          "IndikatorPeriodeId": 13,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 1195,
          "IndikatorPeriodeId": 14,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1196,
          "IndikatorPeriodeId": 17,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1197,
          "IndikatorPeriodeId": 18,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1198,
          "IndikatorPeriodeId": 19,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1199,
          "IndikatorPeriodeId": 21,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.025,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1200,
          "IndikatorPeriodeId": 22,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1201,
          "IndikatorPeriodeId": 24,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1202,
          "IndikatorPeriodeId": 25,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1203,
          "IndikatorPeriodeId": 26,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1204,
          "IndikatorPeriodeId": 27,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0167,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 1205,
          "IndikatorPeriodeId": 28,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0167,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1206,
          "IndikatorPeriodeId": 29,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1207,
          "IndikatorPeriodeId": 32,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1208,
          "IndikatorPeriodeId": 33,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1209,
          "IndikatorPeriodeId": 34,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1210,
          "IndikatorPeriodeId": 35,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1211,
          "IndikatorPeriodeId": 36,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1212,
          "IndikatorPeriodeId": 38,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1213,
          "IndikatorPeriodeId": 41,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1214,
          "IndikatorPeriodeId": 43,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0375,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1215,
          "IndikatorPeriodeId": 44,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1216,
          "IndikatorPeriodeId": 53,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1217,
          "IndikatorPeriodeId": 56,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1218,
          "IndikatorPeriodeId": 57,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1219,
          "IndikatorPeriodeId": 58,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0208,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1220,
          "IndikatorPeriodeId": 65,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1221,
          "IndikatorPeriodeId": 75,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1222,
          "IndikatorPeriodeId": 76,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.0292,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1223,
          "IndikatorPeriodeId": 77,
          "SatKerId": "25AC5DE6-1EB9-4D7D-9DAD-13F5018A0010",
          "bobot": 0.025,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1224,
          "IndikatorPeriodeId": 1,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.3613,
          "capaian": 0.3613,
          "lastUpdate": new Date()
        },
        {
          "id": 1225,
          "IndikatorPeriodeId": 4,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1226,
          "IndikatorPeriodeId": 6,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1227,
          "IndikatorPeriodeId": 7,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1228,
          "IndikatorPeriodeId": 10,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1229,
          "IndikatorPeriodeId": 11,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.028,
          "target": 7,
          "capaian": 7,
          "lastUpdate": new Date()
        },
        {
          "id": 1230,
          "IndikatorPeriodeId": 12,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1231,
          "IndikatorPeriodeId": 13,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 10.839,
          "capaian": 10.839,
          "lastUpdate": new Date()
        },
        {
          "id": 1232,
          "IndikatorPeriodeId": 14,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1233,
          "IndikatorPeriodeId": 16,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1234,
          "IndikatorPeriodeId": 18,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1235,
          "IndikatorPeriodeId": 19,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1236,
          "IndikatorPeriodeId": 20,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1237,
          "IndikatorPeriodeId": 21,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1238,
          "IndikatorPeriodeId": 22,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1239,
          "IndikatorPeriodeId": 24,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1240,
          "IndikatorPeriodeId": 25,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1241,
          "IndikatorPeriodeId": 26,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1242,
          "IndikatorPeriodeId": 27,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.014,
          "target": 153.548,
          "capaian": 153.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1243,
          "IndikatorPeriodeId": 28,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.014,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1244,
          "IndikatorPeriodeId": 29,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1245,
          "IndikatorPeriodeId": 32,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1246,
          "IndikatorPeriodeId": 33,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1247,
          "IndikatorPeriodeId": 34,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 1248,
          "IndikatorPeriodeId": 35,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 135.484,
          "capaian": 135.484,
          "lastUpdate": new Date()
        },
        {
          "id": 1249,
          "IndikatorPeriodeId": 36,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1250,
          "IndikatorPeriodeId": 38,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1251,
          "IndikatorPeriodeId": 40,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1252,
          "IndikatorPeriodeId": 41,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1253,
          "IndikatorPeriodeId": 42,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1254,
          "IndikatorPeriodeId": 43,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1255,
          "IndikatorPeriodeId": 44,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 90.323,
          "capaian": 90.323,
          "lastUpdate": new Date()
        },
        {
          "id": 1256,
          "IndikatorPeriodeId": 51,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1257,
          "IndikatorPeriodeId": 53,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1258,
          "IndikatorPeriodeId": 55,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1259,
          "IndikatorPeriodeId": 56,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1260,
          "IndikatorPeriodeId": 57,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1261,
          "IndikatorPeriodeId": 58,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1262,
          "IndikatorPeriodeId": 65,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1263,
          "IndikatorPeriodeId": 75,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1264,
          "IndikatorPeriodeId": 76,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1265,
          "IndikatorPeriodeId": 77,
          "SatKerId": "9961DA5F-8287-423F-BC78-64084CAE09F8",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1266,
          "IndikatorPeriodeId": 1,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.1806,
          "capaian": 0.1806,
          "lastUpdate": new Date()
        },
        {
          "id": 1267,
          "IndikatorPeriodeId": 4,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1268,
          "IndikatorPeriodeId": 6,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1269,
          "IndikatorPeriodeId": 7,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1270,
          "IndikatorPeriodeId": 10,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1271,
          "IndikatorPeriodeId": 11,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.028,
          "target": 3.5,
          "capaian": 3.5,
          "lastUpdate": new Date()
        },
        {
          "id": 1272,
          "IndikatorPeriodeId": 12,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1273,
          "IndikatorPeriodeId": 13,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.5419,
          "capaian": 0.5419,
          "lastUpdate": new Date()
        },
        {
          "id": 1274,
          "IndikatorPeriodeId": 14,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1275,
          "IndikatorPeriodeId": 16,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1276,
          "IndikatorPeriodeId": 18,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1277,
          "IndikatorPeriodeId": 19,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1278,
          "IndikatorPeriodeId": 20,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1279,
          "IndikatorPeriodeId": 21,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1280,
          "IndikatorPeriodeId": 22,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1281,
          "IndikatorPeriodeId": 24,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1282,
          "IndikatorPeriodeId": 25,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1283,
          "IndikatorPeriodeId": 26,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1284,
          "IndikatorPeriodeId": 27,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.014,
          "target": 76.774,
          "capaian": 76.774,
          "lastUpdate": new Date()
        },
        {
          "id": 1285,
          "IndikatorPeriodeId": 28,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.014,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1286,
          "IndikatorPeriodeId": 29,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1287,
          "IndikatorPeriodeId": 32,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1288,
          "IndikatorPeriodeId": 33,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1289,
          "IndikatorPeriodeId": 34,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1290,
          "IndikatorPeriodeId": 35,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1291,
          "IndikatorPeriodeId": 36,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1292,
          "IndikatorPeriodeId": 38,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1293,
          "IndikatorPeriodeId": 40,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1294,
          "IndikatorPeriodeId": 41,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1295,
          "IndikatorPeriodeId": 42,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1296,
          "IndikatorPeriodeId": 43,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1297,
          "IndikatorPeriodeId": 44,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 45.161,
          "capaian": 45.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1298,
          "IndikatorPeriodeId": 51,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1299,
          "IndikatorPeriodeId": 53,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1300,
          "IndikatorPeriodeId": 55,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1301,
          "IndikatorPeriodeId": 56,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1302,
          "IndikatorPeriodeId": 57,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1303,
          "IndikatorPeriodeId": 58,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1304,
          "IndikatorPeriodeId": 65,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1305,
          "IndikatorPeriodeId": 75,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1306,
          "IndikatorPeriodeId": 76,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1307,
          "IndikatorPeriodeId": 77,
          "SatKerId": "C0150805-8A5E-4645-986C-8B6B0266509B",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1308,
          "IndikatorPeriodeId": 1,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.3613,
          "capaian": 0.3613,
          "lastUpdate": new Date()
        },
        {
          "id": 1309,
          "IndikatorPeriodeId": 4,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1310,
          "IndikatorPeriodeId": 6,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1311,
          "IndikatorPeriodeId": 7,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1312,
          "IndikatorPeriodeId": 10,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1313,
          "IndikatorPeriodeId": 11,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.028,
          "target": 7,
          "capaian": 7,
          "lastUpdate": new Date()
        },
        {
          "id": 1314,
          "IndikatorPeriodeId": 12,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1315,
          "IndikatorPeriodeId": 13,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 10.839,
          "capaian": 10.839,
          "lastUpdate": new Date()
        },
        {
          "id": 1316,
          "IndikatorPeriodeId": 14,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1317,
          "IndikatorPeriodeId": 16,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1318,
          "IndikatorPeriodeId": 18,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1319,
          "IndikatorPeriodeId": 19,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1320,
          "IndikatorPeriodeId": 20,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1321,
          "IndikatorPeriodeId": 21,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1322,
          "IndikatorPeriodeId": 22,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1323,
          "IndikatorPeriodeId": 24,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1324,
          "IndikatorPeriodeId": 25,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1325,
          "IndikatorPeriodeId": 26,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1326,
          "IndikatorPeriodeId": 27,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.014,
          "target": 153.548,
          "capaian": 153.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1327,
          "IndikatorPeriodeId": 28,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.014,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1328,
          "IndikatorPeriodeId": 29,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1329,
          "IndikatorPeriodeId": 32,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1330,
          "IndikatorPeriodeId": 33,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1331,
          "IndikatorPeriodeId": 34,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 1332,
          "IndikatorPeriodeId": 35,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 135.484,
          "capaian": 135.484,
          "lastUpdate": new Date()
        },
        {
          "id": 1333,
          "IndikatorPeriodeId": 36,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1334,
          "IndikatorPeriodeId": 38,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1335,
          "IndikatorPeriodeId": 40,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1336,
          "IndikatorPeriodeId": 41,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1337,
          "IndikatorPeriodeId": 42,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1338,
          "IndikatorPeriodeId": 43,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1339,
          "IndikatorPeriodeId": 44,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 90.323,
          "capaian": 90.323,
          "lastUpdate": new Date()
        },
        {
          "id": 1340,
          "IndikatorPeriodeId": 51,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1341,
          "IndikatorPeriodeId": 53,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1342,
          "IndikatorPeriodeId": 55,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1343,
          "IndikatorPeriodeId": 56,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1344,
          "IndikatorPeriodeId": 57,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1345,
          "IndikatorPeriodeId": 58,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1346,
          "IndikatorPeriodeId": 65,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1347,
          "IndikatorPeriodeId": 75,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1348,
          "IndikatorPeriodeId": 76,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1349,
          "IndikatorPeriodeId": 77,
          "SatKerId": "9E2ACF0E-D1A2-432A-861F-D170A1BB3A14",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1350,
          "IndikatorPeriodeId": 1,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.3613,
          "capaian": 0.3613,
          "lastUpdate": new Date()
        },
        {
          "id": 1351,
          "IndikatorPeriodeId": 4,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1352,
          "IndikatorPeriodeId": 6,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1353,
          "IndikatorPeriodeId": 7,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1354,
          "IndikatorPeriodeId": 10,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1355,
          "IndikatorPeriodeId": 11,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.028,
          "target": 7,
          "capaian": 7,
          "lastUpdate": new Date()
        },
        {
          "id": 1356,
          "IndikatorPeriodeId": 12,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1357,
          "IndikatorPeriodeId": 13,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 10.839,
          "capaian": 10.839,
          "lastUpdate": new Date()
        },
        {
          "id": 1358,
          "IndikatorPeriodeId": 14,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1359,
          "IndikatorPeriodeId": 16,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1360,
          "IndikatorPeriodeId": 18,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1361,
          "IndikatorPeriodeId": 19,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1362,
          "IndikatorPeriodeId": 20,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1363,
          "IndikatorPeriodeId": 21,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1364,
          "IndikatorPeriodeId": 22,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1365,
          "IndikatorPeriodeId": 24,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1366,
          "IndikatorPeriodeId": 25,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1367,
          "IndikatorPeriodeId": 26,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1368,
          "IndikatorPeriodeId": 27,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.014,
          "target": 153.548,
          "capaian": 153.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1369,
          "IndikatorPeriodeId": 28,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.014,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1370,
          "IndikatorPeriodeId": 29,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 18.065,
          "capaian": 18.065,
          "lastUpdate": new Date()
        },
        {
          "id": 1371,
          "IndikatorPeriodeId": 32,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1372,
          "IndikatorPeriodeId": 33,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1373,
          "IndikatorPeriodeId": 34,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 1374,
          "IndikatorPeriodeId": 35,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 135.484,
          "capaian": 135.484,
          "lastUpdate": new Date()
        },
        {
          "id": 1375,
          "IndikatorPeriodeId": 36,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1376,
          "IndikatorPeriodeId": 38,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1377,
          "IndikatorPeriodeId": 40,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1378,
          "IndikatorPeriodeId": 41,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1379,
          "IndikatorPeriodeId": 42,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1380,
          "IndikatorPeriodeId": 43,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1381,
          "IndikatorPeriodeId": 44,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 90.323,
          "capaian": 90.323,
          "lastUpdate": new Date()
        },
        {
          "id": 1382,
          "IndikatorPeriodeId": 51,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1383,
          "IndikatorPeriodeId": 53,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1384,
          "IndikatorPeriodeId": 55,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1385,
          "IndikatorPeriodeId": 56,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1386,
          "IndikatorPeriodeId": 57,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1387,
          "IndikatorPeriodeId": 58,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1388,
          "IndikatorPeriodeId": 65,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1389,
          "IndikatorPeriodeId": 75,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1390,
          "IndikatorPeriodeId": 76,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1391,
          "IndikatorPeriodeId": 77,
          "SatKerId": "1FC2B474-14B2-4344-86F4-75DCB387F600",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1392,
          "IndikatorPeriodeId": 1,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 1393,
          "IndikatorPeriodeId": 4,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1394,
          "IndikatorPeriodeId": 6,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1395,
          "IndikatorPeriodeId": 7,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1396,
          "IndikatorPeriodeId": 10,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1397,
          "IndikatorPeriodeId": 11,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.028,
          "target": 5.25,
          "capaian": 5.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1398,
          "IndikatorPeriodeId": 12,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.028,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1399,
          "IndikatorPeriodeId": 13,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 1400,
          "IndikatorPeriodeId": 14,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1401,
          "IndikatorPeriodeId": 16,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1402,
          "IndikatorPeriodeId": 18,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1403,
          "IndikatorPeriodeId": 19,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1404,
          "IndikatorPeriodeId": 20,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.021,
          "target": 0.651,
          "capaian": 0.651,
          "lastUpdate": new Date()
        },
        {
          "id": 1405,
          "IndikatorPeriodeId": 21,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.021,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1406,
          "IndikatorPeriodeId": 22,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1407,
          "IndikatorPeriodeId": 24,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1408,
          "IndikatorPeriodeId": 25,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1409,
          "IndikatorPeriodeId": 26,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1410,
          "IndikatorPeriodeId": 27,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.014,
          "target": 115.161,
          "capaian": 115.161,
          "lastUpdate": new Date()
        },
        {
          "id": 1411,
          "IndikatorPeriodeId": 28,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.014,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 1412,
          "IndikatorPeriodeId": 29,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 13.548,
          "capaian": 13.548,
          "lastUpdate": new Date()
        },
        {
          "id": 1413,
          "IndikatorPeriodeId": 32,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1414,
          "IndikatorPeriodeId": 33,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1415,
          "IndikatorPeriodeId": 34,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 27.097,
          "capaian": 27.097,
          "lastUpdate": new Date()
        },
        {
          "id": 1416,
          "IndikatorPeriodeId": 35,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 101.613,
          "capaian": 101.613,
          "lastUpdate": new Date()
        },
        {
          "id": 1417,
          "IndikatorPeriodeId": 36,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.3387,
          "capaian": 0.3387,
          "lastUpdate": new Date()
        },
        {
          "id": 1418,
          "IndikatorPeriodeId": 38,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1419,
          "IndikatorPeriodeId": 40,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.6774,
          "capaian": 0.6774,
          "lastUpdate": new Date()
        },
        {
          "id": 1420,
          "IndikatorPeriodeId": 41,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1421,
          "IndikatorPeriodeId": 42,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1422,
          "IndikatorPeriodeId": 43,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0315,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1423,
          "IndikatorPeriodeId": 44,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 67.742,
          "capaian": 67.742,
          "lastUpdate": new Date()
        },
        {
          "id": 1424,
          "IndikatorPeriodeId": 51,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.0525,
          "capaian": 0.0525,
          "lastUpdate": new Date()
        },
        {
          "id": 1425,
          "IndikatorPeriodeId": 53,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1426,
          "IndikatorPeriodeId": 55,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.021,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1427,
          "IndikatorPeriodeId": 56,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1428,
          "IndikatorPeriodeId": 57,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1429,
          "IndikatorPeriodeId": 58,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0175,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1430,
          "IndikatorPeriodeId": 65,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1431,
          "IndikatorPeriodeId": 75,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1432,
          "IndikatorPeriodeId": 76,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.0245,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1433,
          "IndikatorPeriodeId": 77,
          "SatKerId": "88211E05-DE13-4131-8082-7594ADA2C244",
          "bobot": 0.021,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1434,
          "IndikatorPeriodeId": 1,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.0903,
          "capaian": 0.0903,
          "lastUpdate": new Date()
        },
        {
          "id": 1435,
          "IndikatorPeriodeId": 4,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1436,
          "IndikatorPeriodeId": 6,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1437,
          "IndikatorPeriodeId": 7,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1438,
          "IndikatorPeriodeId": 10,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1439,
          "IndikatorPeriodeId": 11,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0319,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 1440,
          "IndikatorPeriodeId": 12,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0319,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1441,
          "IndikatorPeriodeId": 13,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 1442,
          "IndikatorPeriodeId": 14,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1443,
          "IndikatorPeriodeId": 18,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1444,
          "IndikatorPeriodeId": 19,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1445,
          "IndikatorPeriodeId": 21,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0239,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1446,
          "IndikatorPeriodeId": 22,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.7035,
          "capaian": 0.7035,
          "lastUpdate": new Date()
        },
        {
          "id": 1447,
          "IndikatorPeriodeId": 24,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1448,
          "IndikatorPeriodeId": 25,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1449,
          "IndikatorPeriodeId": 26,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1450,
          "IndikatorPeriodeId": 27,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0159,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1451,
          "IndikatorPeriodeId": 28,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0159,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 1452,
          "IndikatorPeriodeId": 29,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1453,
          "IndikatorPeriodeId": 32,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1454,
          "IndikatorPeriodeId": 33,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1455,
          "IndikatorPeriodeId": 34,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1456,
          "IndikatorPeriodeId": 35,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 1457,
          "IndikatorPeriodeId": 36,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 1458,
          "IndikatorPeriodeId": 38,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1459,
          "IndikatorPeriodeId": 40,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1460,
          "IndikatorPeriodeId": 41,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1461,
          "IndikatorPeriodeId": 43,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0359,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1462,
          "IndikatorPeriodeId": 44,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 1463,
          "IndikatorPeriodeId": 53,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1464,
          "IndikatorPeriodeId": 56,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1465,
          "IndikatorPeriodeId": 57,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1466,
          "IndikatorPeriodeId": 58,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0199,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1467,
          "IndikatorPeriodeId": 65,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1468,
          "IndikatorPeriodeId": 75,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1469,
          "IndikatorPeriodeId": 76,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0279,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1470,
          "IndikatorPeriodeId": 77,
          "SatKerId": "D2C96085-B033-48E6-B9F8-4F283DE8696E",
          "bobot": 0.0239,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1471,
          "IndikatorPeriodeId": 6,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 0.2625,
          "capaian": 0.2625,
          "lastUpdate": new Date()
        },
        {
          "id": 1472,
          "IndikatorPeriodeId": 7,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 14.511,
          "capaian": 14.511,
          "lastUpdate": new Date()
        },
        {
          "id": 1473,
          "IndikatorPeriodeId": 10,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1474,
          "IndikatorPeriodeId": 11,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.037,
          "target": 1.75,
          "capaian": 1.75,
          "lastUpdate": new Date()
        },
        {
          "id": 1475,
          "IndikatorPeriodeId": 12,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.037,
          "target": 0.0105,
          "capaian": 0.0105,
          "lastUpdate": new Date()
        },
        {
          "id": 1476,
          "IndikatorPeriodeId": 13,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 0.271,
          "capaian": 0.271,
          "lastUpdate": new Date()
        },
        {
          "id": 1477,
          "IndikatorPeriodeId": 14,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1478,
          "IndikatorPeriodeId": 18,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1479,
          "IndikatorPeriodeId": 19,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 0.4975,
          "capaian": 0.4975,
          "lastUpdate": new Date()
        },
        {
          "id": 1480,
          "IndikatorPeriodeId": 21,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0278,
          "target": 0.0253,
          "capaian": 0.0253,
          "lastUpdate": new Date()
        },
        {
          "id": 1481,
          "IndikatorPeriodeId": 24,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 11.505,
          "capaian": 11.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1482,
          "IndikatorPeriodeId": 26,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 0.3006,
          "capaian": 0.3006,
          "lastUpdate": new Date()
        },
        {
          "id": 1483,
          "IndikatorPeriodeId": 27,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0185,
          "target": 38.387,
          "capaian": 38.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1484,
          "IndikatorPeriodeId": 28,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0185,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 1485,
          "IndikatorPeriodeId": 29,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 0.4516,
          "capaian": 0.4516,
          "lastUpdate": new Date()
        },
        {
          "id": 1486,
          "IndikatorPeriodeId": 32,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 0.0145,
          "capaian": 0.0145,
          "lastUpdate": new Date()
        },
        {
          "id": 1487,
          "IndikatorPeriodeId": 33,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1488,
          "IndikatorPeriodeId": 34,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 0.9032,
          "capaian": 0.9032,
          "lastUpdate": new Date()
        },
        {
          "id": 1489,
          "IndikatorPeriodeId": 35,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 1490,
          "IndikatorPeriodeId": 36,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 0.1129,
          "capaian": 0.1129,
          "lastUpdate": new Date()
        },
        {
          "id": 1491,
          "IndikatorPeriodeId": 38,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1492,
          "IndikatorPeriodeId": 40,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 0.2258,
          "capaian": 0.2258,
          "lastUpdate": new Date()
        },
        {
          "id": 1493,
          "IndikatorPeriodeId": 41,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1494,
          "IndikatorPeriodeId": 43,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0417,
          "target": 0.0263,
          "capaian": 0.0263,
          "lastUpdate": new Date()
        },
        {
          "id": 1495,
          "IndikatorPeriodeId": 44,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 22.581,
          "capaian": 22.581,
          "lastUpdate": new Date()
        },
        {
          "id": 1496,
          "IndikatorPeriodeId": 56,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 0.8065,
          "capaian": 0.8065,
          "lastUpdate": new Date()
        },
        {
          "id": 1497,
          "IndikatorPeriodeId": 57,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 1.05,
          "capaian": 1.05,
          "lastUpdate": new Date()
        },
        {
          "id": 1498,
          "IndikatorPeriodeId": 58,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0231,
          "target": 0.1575,
          "capaian": 0.1575,
          "lastUpdate": new Date()
        },
        {
          "id": 1499,
          "IndikatorPeriodeId": 65,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1500,
          "IndikatorPeriodeId": 75,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1501,
          "IndikatorPeriodeId": 76,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0324,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1502,
          "IndikatorPeriodeId": 77,
          "SatKerId": "3E9E8626-0C05-4336-8FB7-357626327A4A",
          "bobot": 0.0278,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1503,
          "IndikatorPeriodeId": 1,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.039,
          "target": 14.452,
          "capaian": 14.452,
          "lastUpdate": new Date()
        },
        {
          "id": 1504,
          "IndikatorPeriodeId": 4,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1505,
          "IndikatorPeriodeId": 8,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1506,
          "IndikatorPeriodeId": 11,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0346,
          "target": 28,
          "capaian": 28,
          "lastUpdate": new Date()
        },
        {
          "id": 1507,
          "IndikatorPeriodeId": 14,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1508,
          "IndikatorPeriodeId": 18,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1509,
          "IndikatorPeriodeId": 25,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1510,
          "IndikatorPeriodeId": 33,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1511,
          "IndikatorPeriodeId": 38,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1512,
          "IndikatorPeriodeId": 40,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.039,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 1513,
          "IndikatorPeriodeId": 41,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1514,
          "IndikatorPeriodeId": 42,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1515,
          "IndikatorPeriodeId": 44,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 36.129,
          "capaian": 36.129,
          "lastUpdate": new Date()
        },
        {
          "id": 1516,
          "IndikatorPeriodeId": 45,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 5.569,
          "capaian": 5.569,
          "lastUpdate": new Date()
        },
        {
          "id": 1517,
          "IndikatorPeriodeId": 47,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 362.784,
          "capaian": 362.784,
          "lastUpdate": new Date()
        },
        {
          "id": 1518,
          "IndikatorPeriodeId": 48,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 6,
          "capaian": 6,
          "lastUpdate": new Date()
        },
        {
          "id": 1519,
          "IndikatorPeriodeId": 50,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1520,
          "IndikatorPeriodeId": 52,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1521,
          "IndikatorPeriodeId": 53,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1522,
          "IndikatorPeriodeId": 54,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1523,
          "IndikatorPeriodeId": 56,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 48.387,
          "capaian": 48.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1524,
          "IndikatorPeriodeId": 57,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1525,
          "IndikatorPeriodeId": 60,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1526,
          "IndikatorPeriodeId": 63,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1527,
          "IndikatorPeriodeId": 64,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1528,
          "IndikatorPeriodeId": 65,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1529,
          "IndikatorPeriodeId": 66,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1530,
          "IndikatorPeriodeId": 67,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1531,
          "IndikatorPeriodeId": 68,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1532,
          "IndikatorPeriodeId": 69,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1533,
          "IndikatorPeriodeId": 70,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1534,
          "IndikatorPeriodeId": 71,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1535,
          "IndikatorPeriodeId": 72,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1536,
          "IndikatorPeriodeId": 73,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1537,
          "IndikatorPeriodeId": 75,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1538,
          "IndikatorPeriodeId": 77,
          "SatKerId": "4AE0BA8F-4CE5-4427-AC1D-326CB977A908",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1539,
          "IndikatorPeriodeId": 1,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.039,
          "target": 0.7226,
          "capaian": 0.7226,
          "lastUpdate": new Date()
        },
        {
          "id": 1540,
          "IndikatorPeriodeId": 4,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1541,
          "IndikatorPeriodeId": 8,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1542,
          "IndikatorPeriodeId": 11,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0346,
          "target": 12.25,
          "capaian": 12.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1543,
          "IndikatorPeriodeId": 14,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1544,
          "IndikatorPeriodeId": 18,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1545,
          "IndikatorPeriodeId": 25,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1546,
          "IndikatorPeriodeId": 33,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1547,
          "IndikatorPeriodeId": 38,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1548,
          "IndikatorPeriodeId": 40,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.039,
          "target": 15.806,
          "capaian": 15.806,
          "lastUpdate": new Date()
        },
        {
          "id": 1549,
          "IndikatorPeriodeId": 41,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1550,
          "IndikatorPeriodeId": 42,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1551,
          "IndikatorPeriodeId": 44,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 203.226,
          "capaian": 203.226,
          "lastUpdate": new Date()
        },
        {
          "id": 1552,
          "IndikatorPeriodeId": 45,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 2.973,
          "capaian": 2.973,
          "lastUpdate": new Date()
        },
        {
          "id": 1553,
          "IndikatorPeriodeId": 47,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 427.048,
          "capaian": 427.048,
          "lastUpdate": new Date()
        },
        {
          "id": 1554,
          "IndikatorPeriodeId": 48,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 5,
          "capaian": 5,
          "lastUpdate": new Date()
        },
        {
          "id": 1555,
          "IndikatorPeriodeId": 50,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1556,
          "IndikatorPeriodeId": 52,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1557,
          "IndikatorPeriodeId": 53,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1558,
          "IndikatorPeriodeId": 54,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1559,
          "IndikatorPeriodeId": 56,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 48.387,
          "capaian": 48.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1560,
          "IndikatorPeriodeId": 57,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1561,
          "IndikatorPeriodeId": 60,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1562,
          "IndikatorPeriodeId": 63,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1563,
          "IndikatorPeriodeId": 64,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1564,
          "IndikatorPeriodeId": 65,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1565,
          "IndikatorPeriodeId": 66,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1566,
          "IndikatorPeriodeId": 67,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1567,
          "IndikatorPeriodeId": 68,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1568,
          "IndikatorPeriodeId": 69,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1569,
          "IndikatorPeriodeId": 70,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1570,
          "IndikatorPeriodeId": 71,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1571,
          "IndikatorPeriodeId": 72,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1572,
          "IndikatorPeriodeId": 73,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1573,
          "IndikatorPeriodeId": 75,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1574,
          "IndikatorPeriodeId": 77,
          "SatKerId": "30059081-ACD9-475D-92BA-F5CB3DF14C83",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1575,
          "IndikatorPeriodeId": 1,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.039,
          "target": 12.645,
          "capaian": 12.645,
          "lastUpdate": new Date()
        },
        {
          "id": 1576,
          "IndikatorPeriodeId": 4,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1577,
          "IndikatorPeriodeId": 8,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1578,
          "IndikatorPeriodeId": 11,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0346,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1579,
          "IndikatorPeriodeId": 14,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1580,
          "IndikatorPeriodeId": 18,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1581,
          "IndikatorPeriodeId": 25,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1582,
          "IndikatorPeriodeId": 33,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1583,
          "IndikatorPeriodeId": 38,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1584,
          "IndikatorPeriodeId": 40,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.039,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 1585,
          "IndikatorPeriodeId": 41,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1586,
          "IndikatorPeriodeId": 42,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1587,
          "IndikatorPeriodeId": 44,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 1588,
          "IndikatorPeriodeId": 45,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 6.131,
          "capaian": 6.131,
          "lastUpdate": new Date()
        },
        {
          "id": 1589,
          "IndikatorPeriodeId": 47,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 350.346,
          "capaian": 350.346,
          "lastUpdate": new Date()
        },
        {
          "id": 1590,
          "IndikatorPeriodeId": 48,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 6,
          "capaian": 6,
          "lastUpdate": new Date()
        },
        {
          "id": 1591,
          "IndikatorPeriodeId": 50,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1592,
          "IndikatorPeriodeId": 52,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1593,
          "IndikatorPeriodeId": 53,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1594,
          "IndikatorPeriodeId": 54,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1595,
          "IndikatorPeriodeId": 56,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 48.387,
          "capaian": 48.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1596,
          "IndikatorPeriodeId": 57,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1597,
          "IndikatorPeriodeId": 60,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1598,
          "IndikatorPeriodeId": 63,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1599,
          "IndikatorPeriodeId": 64,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1600,
          "IndikatorPeriodeId": 65,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1601,
          "IndikatorPeriodeId": 66,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1602,
          "IndikatorPeriodeId": 67,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1603,
          "IndikatorPeriodeId": 68,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1604,
          "IndikatorPeriodeId": 69,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1605,
          "IndikatorPeriodeId": 70,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1606,
          "IndikatorPeriodeId": 71,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1607,
          "IndikatorPeriodeId": 72,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1608,
          "IndikatorPeriodeId": 73,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1609,
          "IndikatorPeriodeId": 75,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1610,
          "IndikatorPeriodeId": 77,
          "SatKerId": "8ECEFD71-51CD-4FE8-BF20-CBAF6925C08F",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1611,
          "IndikatorPeriodeId": 1,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.039,
          "target": 16.258,
          "capaian": 16.258,
          "lastUpdate": new Date()
        },
        {
          "id": 1612,
          "IndikatorPeriodeId": 4,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1613,
          "IndikatorPeriodeId": 8,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1614,
          "IndikatorPeriodeId": 11,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0346,
          "target": 31.5,
          "capaian": 31.5,
          "lastUpdate": new Date()
        },
        {
          "id": 1615,
          "IndikatorPeriodeId": 14,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1616,
          "IndikatorPeriodeId": 18,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1617,
          "IndikatorPeriodeId": 25,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1618,
          "IndikatorPeriodeId": 33,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1619,
          "IndikatorPeriodeId": 38,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1620,
          "IndikatorPeriodeId": 40,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.039,
          "target": 40.645,
          "capaian": 40.645,
          "lastUpdate": new Date()
        },
        {
          "id": 1621,
          "IndikatorPeriodeId": 41,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1622,
          "IndikatorPeriodeId": 42,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1623,
          "IndikatorPeriodeId": 44,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 406.452,
          "capaian": 406.452,
          "lastUpdate": new Date()
        },
        {
          "id": 1624,
          "IndikatorPeriodeId": 45,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 7.543,
          "capaian": 7.543,
          "lastUpdate": new Date()
        },
        {
          "id": 1625,
          "IndikatorPeriodeId": 47,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 373.149,
          "capaian": 373.149,
          "lastUpdate": new Date()
        },
        {
          "id": 1626,
          "IndikatorPeriodeId": 48,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 5,
          "capaian": 5,
          "lastUpdate": new Date()
        },
        {
          "id": 1627,
          "IndikatorPeriodeId": 50,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1628,
          "IndikatorPeriodeId": 52,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1629,
          "IndikatorPeriodeId": 53,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1630,
          "IndikatorPeriodeId": 54,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1631,
          "IndikatorPeriodeId": 56,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 40.323,
          "capaian": 40.323,
          "lastUpdate": new Date()
        },
        {
          "id": 1632,
          "IndikatorPeriodeId": 57,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1633,
          "IndikatorPeriodeId": 60,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1634,
          "IndikatorPeriodeId": 63,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1635,
          "IndikatorPeriodeId": 64,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1636,
          "IndikatorPeriodeId": 65,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1637,
          "IndikatorPeriodeId": 66,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1638,
          "IndikatorPeriodeId": 67,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1639,
          "IndikatorPeriodeId": 68,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1640,
          "IndikatorPeriodeId": 69,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1641,
          "IndikatorPeriodeId": 70,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1642,
          "IndikatorPeriodeId": 71,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1643,
          "IndikatorPeriodeId": 72,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1644,
          "IndikatorPeriodeId": 73,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1645,
          "IndikatorPeriodeId": 75,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1646,
          "IndikatorPeriodeId": 77,
          "SatKerId": "21ADBDA5-DDEA-4FE0-B6CA-0BA72C91A064",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1647,
          "IndikatorPeriodeId": 1,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.039,
          "target": 0.8129,
          "capaian": 0.8129,
          "lastUpdate": new Date()
        },
        {
          "id": 1648,
          "IndikatorPeriodeId": 4,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1649,
          "IndikatorPeriodeId": 8,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1650,
          "IndikatorPeriodeId": 11,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0346,
          "target": 15.75,
          "capaian": 15.75,
          "lastUpdate": new Date()
        },
        {
          "id": 1651,
          "IndikatorPeriodeId": 14,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1652,
          "IndikatorPeriodeId": 18,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1653,
          "IndikatorPeriodeId": 25,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1654,
          "IndikatorPeriodeId": 33,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1655,
          "IndikatorPeriodeId": 38,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1656,
          "IndikatorPeriodeId": 40,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.039,
          "target": 20.323,
          "capaian": 20.323,
          "lastUpdate": new Date()
        },
        {
          "id": 1657,
          "IndikatorPeriodeId": 41,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1658,
          "IndikatorPeriodeId": 42,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1659,
          "IndikatorPeriodeId": 44,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 203.226,
          "capaian": 203.226,
          "lastUpdate": new Date()
        },
        {
          "id": 1660,
          "IndikatorPeriodeId": 45,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 411.737,
          "capaian": 411.737,
          "lastUpdate": new Date()
        },
        {
          "id": 1661,
          "IndikatorPeriodeId": 47,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 201.086,
          "capaian": 201.086,
          "lastUpdate": new Date()
        },
        {
          "id": 1662,
          "IndikatorPeriodeId": 48,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 4,
          "capaian": 4,
          "lastUpdate": new Date()
        },
        {
          "id": 1663,
          "IndikatorPeriodeId": 50,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1664,
          "IndikatorPeriodeId": 52,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1665,
          "IndikatorPeriodeId": 53,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1666,
          "IndikatorPeriodeId": 54,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1667,
          "IndikatorPeriodeId": 56,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 32.258,
          "capaian": 32.258,
          "lastUpdate": new Date()
        },
        {
          "id": 1668,
          "IndikatorPeriodeId": 57,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1669,
          "IndikatorPeriodeId": 60,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1670,
          "IndikatorPeriodeId": 63,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1671,
          "IndikatorPeriodeId": 64,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1672,
          "IndikatorPeriodeId": 65,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1673,
          "IndikatorPeriodeId": 66,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1674,
          "IndikatorPeriodeId": 67,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1675,
          "IndikatorPeriodeId": 68,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1676,
          "IndikatorPeriodeId": 69,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1677,
          "IndikatorPeriodeId": 70,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1678,
          "IndikatorPeriodeId": 71,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1679,
          "IndikatorPeriodeId": 72,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1680,
          "IndikatorPeriodeId": 73,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1681,
          "IndikatorPeriodeId": 75,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1682,
          "IndikatorPeriodeId": 77,
          "SatKerId": "FF742A2B-5B08-4454-B4AD-B05F4213ADC8",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1683,
          "IndikatorPeriodeId": 1,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.039,
          "target": 12.645,
          "capaian": 12.645,
          "lastUpdate": new Date()
        },
        {
          "id": 1684,
          "IndikatorPeriodeId": 4,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1685,
          "IndikatorPeriodeId": 8,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1686,
          "IndikatorPeriodeId": 11,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0346,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1687,
          "IndikatorPeriodeId": 14,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1688,
          "IndikatorPeriodeId": 18,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1689,
          "IndikatorPeriodeId": 25,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1690,
          "IndikatorPeriodeId": 33,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1691,
          "IndikatorPeriodeId": 38,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1692,
          "IndikatorPeriodeId": 40,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.039,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 1693,
          "IndikatorPeriodeId": 41,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1694,
          "IndikatorPeriodeId": 42,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1695,
          "IndikatorPeriodeId": 44,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 33.871,
          "capaian": 33.871,
          "lastUpdate": new Date()
        },
        {
          "id": 1696,
          "IndikatorPeriodeId": 45,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 4.599,
          "capaian": 4.599,
          "lastUpdate": new Date()
        },
        {
          "id": 1697,
          "IndikatorPeriodeId": 47,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 373.149,
          "capaian": 373.149,
          "lastUpdate": new Date()
        },
        {
          "id": 1698,
          "IndikatorPeriodeId": 48,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 6,
          "capaian": 6,
          "lastUpdate": new Date()
        },
        {
          "id": 1699,
          "IndikatorPeriodeId": 50,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1700,
          "IndikatorPeriodeId": 52,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1701,
          "IndikatorPeriodeId": 53,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1702,
          "IndikatorPeriodeId": 54,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1703,
          "IndikatorPeriodeId": 56,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 48.387,
          "capaian": 48.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1704,
          "IndikatorPeriodeId": 57,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1705,
          "IndikatorPeriodeId": 60,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1706,
          "IndikatorPeriodeId": 63,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1707,
          "IndikatorPeriodeId": 64,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1708,
          "IndikatorPeriodeId": 65,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1709,
          "IndikatorPeriodeId": 66,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1710,
          "IndikatorPeriodeId": 67,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1711,
          "IndikatorPeriodeId": 68,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1712,
          "IndikatorPeriodeId": 69,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1713,
          "IndikatorPeriodeId": 70,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1714,
          "IndikatorPeriodeId": 71,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1715,
          "IndikatorPeriodeId": 72,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1716,
          "IndikatorPeriodeId": 73,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1717,
          "IndikatorPeriodeId": 75,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1718,
          "IndikatorPeriodeId": 77,
          "SatKerId": "FAC23AC4-8A7E-482D-98CB-8F8177E86832",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1719,
          "IndikatorPeriodeId": 1,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.039,
          "target": 0.9935,
          "capaian": 0.9935,
          "lastUpdate": new Date()
        },
        {
          "id": 1720,
          "IndikatorPeriodeId": 4,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.039,
          "target": 0.84,
          "capaian": 0.84,
          "lastUpdate": new Date()
        },
        {
          "id": 1721,
          "IndikatorPeriodeId": 8,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.039,
          "target": 8.505,
          "capaian": 8.505,
          "lastUpdate": new Date()
        },
        {
          "id": 1722,
          "IndikatorPeriodeId": 11,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0346,
          "target": 19.25,
          "capaian": 19.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1723,
          "IndikatorPeriodeId": 14,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1724,
          "IndikatorPeriodeId": 18,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 2.625,
          "capaian": 2.625,
          "lastUpdate": new Date()
        },
        {
          "id": 1725,
          "IndikatorPeriodeId": 25,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 0.6825,
          "capaian": 0.6825,
          "lastUpdate": new Date()
        },
        {
          "id": 1726,
          "IndikatorPeriodeId": 33,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 0.0107,
          "capaian": 0.0107,
          "lastUpdate": new Date()
        },
        {
          "id": 1727,
          "IndikatorPeriodeId": 38,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 0.0402,
          "capaian": 0.0402,
          "lastUpdate": new Date()
        },
        {
          "id": 1728,
          "IndikatorPeriodeId": 40,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1729,
          "IndikatorPeriodeId": 41,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.039,
          "target": 0,
          "capaian": 0,
          "lastUpdate": new Date()
        },
        {
          "id": 1730,
          "IndikatorPeriodeId": 42,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.039,
          "target": 0.1785,
          "capaian": 0.1785,
          "lastUpdate": new Date()
        },
        {
          "id": 1731,
          "IndikatorPeriodeId": 44,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 248.387,
          "capaian": 248.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1732,
          "IndikatorPeriodeId": 45,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 4.344,
          "capaian": 4.344,
          "lastUpdate": new Date()
        },
        {
          "id": 1733,
          "IndikatorPeriodeId": 47,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 225.962,
          "capaian": 225.962,
          "lastUpdate": new Date()
        },
        {
          "id": 1734,
          "IndikatorPeriodeId": 48,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 6,
          "capaian": 6,
          "lastUpdate": new Date()
        },
        {
          "id": 1735,
          "IndikatorPeriodeId": 50,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1736,
          "IndikatorPeriodeId": 52,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 26.25,
          "capaian": 26.25,
          "lastUpdate": new Date()
        },
        {
          "id": 1737,
          "IndikatorPeriodeId": 53,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 0.105,
          "capaian": 0.105,
          "lastUpdate": new Date()
        },
        {
          "id": 1738,
          "IndikatorPeriodeId": 54,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.026,
          "target": 3,
          "capaian": 3,
          "lastUpdate": new Date()
        },
        {
          "id": 1739,
          "IndikatorPeriodeId": 56,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 48.387,
          "capaian": 48.387,
          "lastUpdate": new Date()
        },
        {
          "id": 1740,
          "IndikatorPeriodeId": 57,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1741,
          "IndikatorPeriodeId": 60,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 3.99,
          "capaian": 3.99,
          "lastUpdate": new Date()
        },
        {
          "id": 1742,
          "IndikatorPeriodeId": 63,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.013,
          "target": 0.0276,
          "capaian": 0.0276,
          "lastUpdate": new Date()
        },
        {
          "id": 1743,
          "IndikatorPeriodeId": 64,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 0.21,
          "capaian": 0.21,
          "lastUpdate": new Date()
        },
        {
          "id": 1744,
          "IndikatorPeriodeId": 65,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 0.42,
          "capaian": 0.42,
          "lastUpdate": new Date()
        },
        {
          "id": 1745,
          "IndikatorPeriodeId": 66,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.026,
          "target": 0.3675,
          "capaian": 0.3675,
          "lastUpdate": new Date()
        },
        {
          "id": 1746,
          "IndikatorPeriodeId": 67,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.026,
          "target": 0.1103,
          "capaian": 0.1103,
          "lastUpdate": new Date()
        },
        {
          "id": 1747,
          "IndikatorPeriodeId": 68,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 0.126,
          "capaian": 0.126,
          "lastUpdate": new Date()
        },
        {
          "id": 1748,
          "IndikatorPeriodeId": 69,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0216,
          "target": 0.63,
          "capaian": 0.63,
          "lastUpdate": new Date()
        },
        {
          "id": 1749,
          "IndikatorPeriodeId": 70,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0173,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1750,
          "IndikatorPeriodeId": 71,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1751,
          "IndikatorPeriodeId": 72,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0173,
          "target": 0.315,
          "capaian": 0.315,
          "lastUpdate": new Date()
        },
        {
          "id": 1752,
          "IndikatorPeriodeId": 73,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0173,
          "target": 6.3,
          "capaian": 6.3,
          "lastUpdate": new Date()
        },
        {
          "id": 1753,
          "IndikatorPeriodeId": 75,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.0303,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        },
        {
          "id": 1754,
          "IndikatorPeriodeId": 77,
          "SatKerId": "77B47F90-EA1A-474C-9B66-F9A3E7904894",
          "bobot": 0.026,
          "target": 1,
          "capaian": 1,
          "lastUpdate": new Date()
        }
      ], {}, {
        'id': {
          autoIncrement: true
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IndikatorSatuanKerjas', null, {});
  }
};