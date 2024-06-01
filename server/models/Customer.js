module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        CustomerID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        StaffID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Staff',
                key: 'StaffID'
            }
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.STRING(50)
        },
        Age: {
            type: DataTypes.INTEGER
        },
        Address: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Customer',
        timestamps: false
    });

    return Customer;
};
