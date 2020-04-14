const express = require("express");
const router = express.Router();

const {KategoriUnit} = require('../models/KategoriUnit');

router.post('/create', (req, res)=>{
    const id = req.body.id;
    const nama = req.body.nama;

    KategoriUnit.create({
        id: id,
        nama: nama
    });

    return res.status(200).json({
        message: "success"
    });
});

module.exports = router;