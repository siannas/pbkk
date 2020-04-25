const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const JenisSatKer = require('../models/index')['JenisSatKer'];

_ROUTE.read(router, JenisSatKer);
_ROUTE.create(router, JenisSatKer);
_ROUTE.update(router, JenisSatKer);
_ROUTE.delete(router, JenisSatKer);
_ROUTE.category(router, JenisSatKer, 
        { attributes: ['id', ['nama', 'name']]}
    );

module.exports = router;