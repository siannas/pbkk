const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const SatuanKerja = require('../models/index')['SatuanKerja'];

_ROUTE.read(router, SatuanKerja);
_ROUTE.create(router, SatuanKerja);
_ROUTE.update(router, SatuanKerja);
_ROUTE.delete(router, SatuanKerja);
_ROUTE.category(router, SatuanKerja, 
        { attributes: ['id', ['nama', 'name']]}
    );

module.exports = router;