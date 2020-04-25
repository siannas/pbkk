const express = require("express");
const router = express.Router();
const _ROUTE = require('./Master');

const  Aspek = require('../models/index')['Aspek'];

_ROUTE.read(router,  Aspek);
_ROUTE.create(router,  Aspek);
_ROUTE.update(router,  Aspek);
_ROUTE.delete(router,  Aspek);
_ROUTE.category(router,  Aspek, 
        { attributes: ['id', ['komponenAspek', 'name']]}
    );

module.exports = router;