const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const DataDasar = require('../models/index')['DataDasar'];

_ROUTE.read(router, DataDasar);
_ROUTE.create(router, DataDasar);
_ROUTE.update(router, DataDasar);
_ROUTE.delete(router, DataDasar);
_ROUTE.category(router, DataDasar, 
        { attributes: ['id', ['nama', 'name']]}
    );

module.exports = router;