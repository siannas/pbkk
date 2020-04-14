const express = require("express");
const router = express.Router();

const {
    KategoriUnit
} = require('../models/KategoriUnit');

router.post('/create', (req, res) => {
    const id = req.body.id;
    const nama = req.body.nama;

    KategoriUnit.findByPk(id)
        .then((ins) => {
            if (ins !== null) {
                return res.status(500).json({
                    message: "failed"
                });
            } else {
                KategoriUnit.create({
                    id: id,
                    nama: nama
                });

                return res.status(200).json({
                    message: "success"
                });
            }
        });
});

router.get('/read', async (req, res) => {

    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const {
        count,
        rows
    } = await KategoriUnit.findAndCountAll({
        offset: offset,
        limit: limit
    });

    return res.status(200).json({
        count,
        rows
    });
})
router.post('/update', async (req, res) => {
    const trueid = req.body.trueid;

    const newRow = {
        id: req.body.id,
        nama: req.body.nama
    };

    const ins = await KategoriUnit.findByPk(trueid);
    if (ins !== null) {
        
        await KategoriUnit.upsert(
            newRow, {
                where: {
                    id: id
                }
            });

        return res.status(200).json({
            message: `updated rows ${id}`
        });
    } else {
        return res.status(500).json({
            message: "failed"
        });
    }
});

router.post('/delete', async (req, res) => {
    const id = req.body.id;

    const ins = await KategoriUnit.findByPk(id);
    if (ins !== null) {
        await KategoriUnit.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).json({
            message: `deleted rows ${id}`
        });
    } else {
        return res.status(500).json({
            message: "failed"
        });
    }

});

module.exports = router;