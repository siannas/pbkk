module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Unit', // name of Source model
            'KategoriUnitId', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'KategoriUnit', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        )
    }
}