module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        AccountID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Role: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FullName: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        tableName: 'Account',
        timestamps: false
    });

    return Account;
};
