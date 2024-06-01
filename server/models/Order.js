module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        OrderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CustomerID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Customer',
                key: 'CustomerID'
            }
        },
        StaffID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Staff',
                key: 'StaffID'
            }
        },
        OrderDate: {
            type: DataTypes.DATE
        },
        DeliveryDate: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'Order',
        timestamps: false
    });

    return Order;
};
