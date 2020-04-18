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
        encrypt: true,
        enableArithAbort: true,
    },
    dialect: 'mssql',
});

const queryInterface = sequelize.getQueryInterface();

// require('./models/KategoriUnit').init(sequelize);
// require('./models/Unit').init(sequelize);
// require('./models/DataDasar').init(sequelize);
// require('./models/CapaianUnit').init(sequelize);

// const {KategoriUnit} = require('./models/KategoriUnit');
// const {Unit} = require('./models/Unit');
// const { DataDasar } = require('./models/DataDasar');
// const { CapaianUnit } = require('./models/CapaianUnit');


// DataDasar.hasMany(CapaianUnit);
// CapaianUnit.belongsTo(DataDasar);

// Unit.hasMany(CapaianUnit);
// CapaianUnit.belongsTo(Unit);

// KategoriUnit.hasMany(Unit);
// Unit.KategoriUnit = Unit.belongsTo(KategoriUnit);

require('./add-association').up(queryInterface , sequelize);

// sequelize.sync({
//     force: true
// });
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.sequelize = sequelize;

module.exports = {
    db,
    KategoriUnit, 
    Unit,
    DataDasar,
    CapaianUnit
}