module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
        PaymentID: {
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
        Date: {
            type: DataTypes.DATE
        },
        Point: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'Payment',
        timestamps: false
    });

    return Payment;
};