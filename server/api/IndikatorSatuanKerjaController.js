const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const IndikatorSatuanKerja = require('../models/index')['IndikatorSatuanKerja'];

_ROUTE.read(router, IndikatorSatuanKerja);
_ROUTE.create(router, IndikatorSatuanKerja);
_ROUTE.update(router, IndikatorSatuanKerja);
_ROUTE.delete(router, IndikatorSatuanKerja);


module.exports = router;