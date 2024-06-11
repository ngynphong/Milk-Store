module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        CartID: {
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
        Quantity: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'Cart',
        timestamps: false
    });

    Cart.associate = models => {
        Cart.hasMany(models.User, { foreignKey: 'UserID' });
        Cart.belongsTo(models.Product, { foreignKey: 'ProductID' });
      };
    

    return Cart;
};