var express = require('express');
var app = express();
const bodyParser = require("body-parser");

const db = require('./sequelize-setup');

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const { PORT } = require('../config/config');

const KategoriUnitController = require('./api/KategoriUnitController');

app.use('/kategoriunit', KategoriUnitController);

var port = PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))