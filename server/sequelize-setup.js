const Sequelize = require('sequelize');
const {
    DB_NAME,
    USER,
    PASSWORD
} = require('../config/config');

db = {};

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
    host: 'localhost',
    dialectOptions: {
        encrypt: true
    },
    dialect: 'mssql',
});

// require('./models/KategoriUnit').init(sequelize);
// require('./models/Unit').init(sequelize);
// require('./models/DataDasar').init(sequelize);
// require('./models/CapaianUnit').init(sequelize);

const {KategoriUnit} = require('./models/KategoriUnit');
const {Unit} = require('./models/Unit');
const { DataDasar } = require('./models/DataDasar');
const { CapaianUnit } = require('./models/CapaianUnit');


// DataDasar.hasMany(CapaianUnit);
// CapaianUnit.belongsTo(DataDasar);

// Unit.hasMany(CapaianUnit);
// CapaianUnit.belongsTo(Unit);

// KategoriUnit.hasMany(Unit);
// Unit.belongsTo(KategoriUnit)

// try {
//     sequelize.sync({
//         force: true
//     });

//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

db.sequelize = sequelize;

module.exports = {
    db
}