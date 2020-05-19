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


const C = require('./api');

app.use('/api/capaianunit', C.CapaianUnitController);
app.use('/api/kategoriunit', C.KategoriUnitController);
app.use('/api/datadasar', C.DataDasarController);
app.use('/api/indikatorperiode', C.IndikatorPeriodeController);
app.use('/api/indikatorsatuankerja', C.IndikatorSatuanKerjaController);
app.use('/api/jenissatker', C.JenisSatKerController);
app.use('/api/masterindikator', C.MasterIndikatorController);
app.use('/api/periode', C.PeriodeController);
app.use('/api/satuankerja', C.SatuanKerjaController);
app.use('/api/unit', C.UnitController);
app.use('/api/aspek', C.AspekController);

app.use('/api/penelitian', C.PenelitianController);
app.use('/api/publikasi', C.PublikasiController);
app.use('/api/abmas', C.AbmasController);
app.use('/api/dosen', C.DosenController);

app.use('/api/konkin', C.KonKinController);

var port = PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))