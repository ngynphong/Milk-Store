module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        AdminID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AccountManager: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Admin',
        timestamps: false
    });

    return Admin;
};
