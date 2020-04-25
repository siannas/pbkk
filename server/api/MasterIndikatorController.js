const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const MasterIndikator = require('../models/index')['MasterIndikator'];

_ROUTE.read(router, MasterIndikator);
_ROUTE.create(router, MasterIndikator);
_ROUTE.update(router, MasterIndikator);
_ROUTE.delete(router, MasterIndikator);

_ROUTE.category(router, MasterIndikator, 
    { attributes: ['id', ['nama', 'name']]}
);

module.exports = router;