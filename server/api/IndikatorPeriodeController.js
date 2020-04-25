const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const IndikatorPeriode = require('../models/index')['IndikatorPeriode'];

_ROUTE.read(router, IndikatorPeriode);
_ROUTE.create(router, IndikatorPeriode);
_ROUTE.update(router, IndikatorPeriode);
_ROUTE.delete(router, IndikatorPeriode);

_ROUTE.category(router, IndikatorPeriode, 
    { attributes: ['id', ['bobot', 'name']]}
);

module.exports = router;