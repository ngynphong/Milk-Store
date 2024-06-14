module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'CategoryID'
      }
    },
    BrandID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BrandMilk',
        key: 'BrandID'
      }
    },
    AgeRangeID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'AgeRange',
        key: 'AgeRangeID'
      }
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    ImgProduct: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    tableName: 'Product',
    timestamps: false
  });


  Product.associate = models => {
    Product.hasMany(models.BrandMilk, { foreignKey: 'BrandID' });
    Product.hasMany(models.Category, { foreignKey: 'CategoryID' });
    Product.hasMany(models.AgeRange, { foreignKey: 'AgeRangeID' });
  };

  return Product;
};
