module.exports = (sequelize, DataTypes) => {
    const ProductItem = sequelize.define('ProductItem', {
        ProductItemID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Quantity: {
            type: DataTypes.INTEGER
        },
        ImgProduct: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.TEXT
        },
        BrandID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BrandMilk',
                key: 'BrandID'
            }
        },
        CategoryID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Category',
                key: 'CategoryID'
            }
        },
        AgeRangeID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'AgeRange',
                key: 'AgeRangeID'
            }
        }
    }, {
        tableName: 'ProductItem',
        timestamps: false
    });

    return ProductItem;
};
