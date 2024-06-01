module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        CountryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: DataTypes.STRING(50)
        },
        Code: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'Country',
        timestamps: false
    });

    return Country;
};
