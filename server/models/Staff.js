module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define('Staff', {
        StaffID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AdminID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Admin',
                key: 'AdminID'
            }
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING
        },
        Sex: {
            type: DataTypes.STRING(10)
        },
        Phone: {
            type: DataTypes.STRING(50)
        }
    }, {
        tableName: 'Staff',
        timestamps: false
    });

    return Staff;
};
