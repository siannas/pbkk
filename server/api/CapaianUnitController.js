const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const CapaianUnit = require('../models/index')['CapaianUnit'];

_ROUTE.read(router, CapaianUnit);
_ROUTE.create(router, CapaianUnit);
_ROUTE.update(router, CapaianUnit);
_ROUTE.delete(router, CapaianUnit);

module.exports = router;