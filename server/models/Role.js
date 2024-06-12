module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {

        RoleID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        tableName: 'Role',
        timestamps: false
    });

    Role.associate = models => {
        Role.hasMany(models.User, { foreignKey: 'RoleID' });
      };
    
    return Role;
};
