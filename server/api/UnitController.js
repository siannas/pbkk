const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const Unit = require('../models/index')['Unit'];

_ROUTE.read(router, Unit);
_ROUTE.create(router, Unit);
_ROUTE.update(router, Unit);
_ROUTE.delete(router, Unit);

module.exports = router;