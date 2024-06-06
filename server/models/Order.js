module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        OrderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'UserID'
            }
        },

    }, {
        tableName: 'Order',
        timestamps: false
    });

    Order.associate = models => {
        Order.hasMany(models.User, { foreignKey: 'UserID' });
        Order.belongsTo(models.OrderDetail, { foreignKey: 'OrderID' });
      };
    
    return Order;
};
