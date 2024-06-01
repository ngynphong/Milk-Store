module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        ProductID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        BrandID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BrandMilk',
                key: 'BrandID'
            }
        },
        ProductLName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Product',
        timestamps: false
    });

    return Product;
};
