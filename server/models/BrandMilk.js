module.exports = (sequelize, DataTypes) => {
    const BrandMilk = sequelize.define('BrandMilk', {
        BrandID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CompanyID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Company',
                key: 'CompanyID'
            }
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'BrandMilk',
        timestamps: false
    });

    return BrandMilk;
};
