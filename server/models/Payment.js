module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
        PaymentID: {
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
