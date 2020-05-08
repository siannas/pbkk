'use strict';
var express = require('express');
const router = express.Router();
const sequelize = require('../models/index')['sequelize'];

router.get('/read', async (req, res) => {    
    sequelize.query("SELECT * FROM [dbo].[Penelitians]", ).then( (rows) => {
        return res.status(200).json(rows[0]);
    });
})

module.exports = router;