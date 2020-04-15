const express = require("express");
const router = express.Router();

const {
    KategoriUnit
} = require('../models/KategoriUnit');

router.post('/create', async (req, res) => {
    const nama = req.body.nama || "null";

    const newData =await KategoriUnit.create({
        nama: nama
    });

    return res.status(200).json({
        message: "success",
        newData: newData
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
});
router.post('/update', async (req, res) => {
    const trueid = req.body.trueid;

    const ins = await KategoriUnit.findByPk(trueid);
    if (ins !== null) {

        const newData = {
            id : req.body.id,
            nama : req.body.nama
        }
        
        // ins.set('id', 3, { raw: true })
        // ins.changed('id', true);

        // ins.save();
        // await KategoriUnit.upsert(
        //     newRow, {
        //         where: {
        //             id: id
        //         }
        //     });


        KategoriUnit.update(
            newData,{
            where:{
                id:trueid
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