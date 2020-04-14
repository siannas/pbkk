const express = require("express");
const router = express.Router();

const {
    Unit
} = require('../models/Unit');

router.get('/tes', (req, res) => {
    Unit.create({
        id: id,
        nama: nama,
        
    }, {
        include: [{
            association: Unit.KategoriUnit,
        }]
    });
});

router.post('/create', (req, res) => {
    const id = req.body.id;
    const nama = req.body.nama;

    Unit.findByPk(id)
        .then((ins) => {
            if (ins !== null) {
                return res.status(500).json({
                    message: "failed"
                });
            } else {
                Unit.create({
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
            nama: req.body.nama
        }

        // ins.set('id', 3, { raw: true })
        // ins.changed('id', true);

        // ins.save();
        // await Unit.upsert(
        //     newRow, {
        //         where: {
        //             id: id
        //         }
        //     });


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