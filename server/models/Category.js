module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        CategoryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NameMilk: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Category',
        timestamps: false
    });

    return Category;
};
