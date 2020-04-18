var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const { PORT } = require('../config/config');
const db = require('./models/index');
const cors = require("cors");

app.use(cors());

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());



const KategoriUnitController = require('./api/KategoriUnitController');
const UnitController = require('./api/UnitController');

app.use('/api/kategoriunit', KategoriUnitController);
app.use('/api/unit', UnitController);

var port = PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))