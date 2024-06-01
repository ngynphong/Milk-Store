module.exports = (sequelize, DataTypes) => {
    const AgeRange = sequelize.define('AgeRange', {
        AgeRangeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Age: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'AgeRange',
        timestamps: false
    });

    return AgeRange;
};
