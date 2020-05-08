'use strict';
const { QueryTypes } = require('sequelize');
var express = require('express');
const router = express.Router();
const sequelize = require('../models/index')['sequelize'];

router.get('/read', async (req, res) => {    
    sequelize.query("SELECT * FROM [dbo].[Dosens]",{ raw: true  } ).then( (rows) => {
        return res.status(200).json(rows[0]);
    });
})

module.exports = router;