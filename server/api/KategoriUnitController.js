const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const KategoriUnit = require('../models/index')['KategoriUnit'];

_ROUTE.read(router, KategoriUnit);
_ROUTE.create(router, KategoriUnit);
_ROUTE.update(router, KategoriUnit);
_ROUTE.delete(router, KategoriUnit);
_ROUTE.category(router, KategoriUnit, 
        { attributes: ['id', ['nama', 'name']]}
    );

module.exports = router;