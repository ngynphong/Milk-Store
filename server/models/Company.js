module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        CompanyID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CountryID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Country', // Table name must match your database table name
                key: 'CountryID'
            }
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Logo: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Company', // Explicit table name to ensure it matches your database table
        timestamps: false // Disable timestamps if not required
    });

    Company.associate = models => {
        Company.hasMany(models.Country, { foreignKey: 'CountryID' });
        Company.belongsTo(models.BrandMilk, { foreignKey: 'CompanyID' });
      };
    

    return Company;
};
