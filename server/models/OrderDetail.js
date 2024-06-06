module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail', {
        OrderDetailID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductItemID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ProductItem',
                key: 'ProductItemID'
            }
        },
        OrderID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Order',
                key: 'OrderID'
            }
        },
        Status: {
            type: DataTypes.STRING
        },
        DeliveryDate: {
            type: DataTypes.DATE
        },
        OrderDate: {
            type: DataTypes.DATE
        },
        PaymentStatus: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'OrderDetail',
        timestamps: false
    });

    OrderDetail.associate = models => {
        OrderDetail.hasMany(models.ProductItem, { foreignKey: 'ProductItemID' });
        OrderDetail.hasMany(models.Order, { foreignKey: 'OrderID' });
    };

    return OrderDetail;
}