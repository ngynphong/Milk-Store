module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        UserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        RoleID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Role',
                key: 'RoleID'
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Age: {
            type: DataTypes.INTEGER
        },
        Address: {
            type: DataTypes.STRING
        },

    }, {
        tableName: 'User',
        timestamps: false
    });

    return User;
};
