const express = require("express");
const router = express.Router();

const {
    Unit
} = require('../models/Unit');
const {
    KategoriUnit
} = require('../models/KategoriUnit');

router.post('/create', async(req, res) => {
    const kategoriUnitId = req.body.kategoriUnitId;
    const id = req.body.id;
    const nama = req.body.nama;

    kategoriUnit_ins = await KategoriUnit.findByPk(kategoriUnitId);
    if(await Unit.findByPk(id)=== null){
        if(kategoriUnit_ins === null){
            return res.status(500).json({
                message: "associated table notfound"
            });
        }

        Unit.create({
            id: id,
            nama: nama,
            KategoriUnitId: kategoriUnit_ins.id
        });

        return res.status(200).json({
            message: "success"
        });
    }
    else{
        return res.status(500).json({
            message: "failed"
        });
    }
});

router.get('/read', async (req, res) => {

    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const {
        count,
        rows
    } = await Unit.findAndCountAll({
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

    const ins = await Unit.findByPk(trueid);
    if (ins !== null) {

        const newData = {
            id: req.body.id,
            nama: req.body.nama,
            KategoriUnitId: req.body.KategoriUnitId
        }

        Unit.update(
            newData, {
                where: {
                    id: trueid
                }
            })
        return res.status(200).json({
            message: `updated rows ${trueid}`
        });
    } else {
        return res.status(500).json({
            message: "failed"
        });
    }
});

router.post('/delete', async (req, res) => {
    const id = req.body.id;

    const ins = await Unit.findByPk(id);
    if (ins !== null) {
        await Unit.destroy({
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