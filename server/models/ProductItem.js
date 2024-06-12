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
        ImgProduct: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.TEXT
        },
        ProductID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'ProductID'
            }
        },

    }, {
        tableName: 'ProductItem',
        timestamps: false
    });

    ProductItem.associate = models => {

        ProductItem.hasMany(models.Product, { foreignKey: 'ProductID' });
        ProductItem.belongsTo(models.OrderDetail, { foreignKey: 'ProductItemID' });
        
      };
    

    return ProductItem;
};
