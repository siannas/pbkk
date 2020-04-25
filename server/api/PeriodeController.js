const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const Periode = require('../models/index')['Periode'];

_ROUTE.read(router, Periode);
_ROUTE.create(router, Periode);
_ROUTE.update(router, Periode);
_ROUTE.delete(router, Periode);
_ROUTE.category(router, Periode, 
        { attributes: ['id', ['nama', 'name']]}
    );

module.exports = router;