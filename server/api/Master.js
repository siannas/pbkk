var Module = {
    read: function(Router, Model){
        Router.get('/read', async (req, res) => {

            const offset = parseInt(req.query.offset) || 0;
            const limit = parseInt(req.query.limit) || 30;
        
            const {
                count,
                rows
            } = await Model.findAndCountAll({
                offset: offset,
                limit: limit
            });
        
            return res.status(200).json({
                count,
                rows
            });
        })
    },
    create: function(Router, Model){
        Router.post('/create', async(req, res) => {
            const nama = req.body.nama || "null";
            const newData =await Model.create();
            const ins = await Model.findByPk(newData.id);
        
            return res.status(200).json({
                message: "success",
                newData: newData,
                tes: ins
            });
        });
    },
    update: function(Router, Model){
        Router.post('/update', async (req, res) => {
            const trueid = req.body.trueid || -1;

            const ins = await Model.findByPk(trueid);
            if (ins !== null) {

                var oriData = ins.dataValues;
                var newData = {};
                var params = req.body;

                for (var key in oriData) {
                    newData[key] =  params[key] || oriData[key];
                }

                Model.update(
                    newData, {
                        where: {
                            id: trueid
                        }
                    })

                return res.status(200).json({
                    message: `updated rows ${trueid}`,
                    oriData,
                    newData
                });
            } else {
                return res.status(500).json({
                    message: "failed"
                });
            }
        });
    },
    delete: function(Router, Model){
        Router.post('/delete', async (req, res) => {
            const id = req.body.id;
        
            const ins = await Model.findByPk(id);
            if (ins !== null) {
                await Model.destroy({
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
    },
    category: function(Router, Model, Opt){
        Router.get('/category', async (req, res) => {
            if ( typeof Opt == undefined){
                return res.status(500);    
            }
            const result = await Model.findAll(Opt);
        
            return res.status(200).json(result);
        });
    }
}

module.exports = Module;