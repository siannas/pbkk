var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const { PORT } = require('../config/config');
const db = require('./sequelize-setup');

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());



const KategoriUnitController = require('./api/KategoriUnitController');
const UnitController = require('./api/UnitController');

app.use('/kategoriunit', KategoriUnitController);
app.use('/unit', UnitController);

var port = PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))