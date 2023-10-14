const { DataTypes } = require("sequelize");

const productModel = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.STRING(65),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM("bottom", "top", "outer", "pajama"),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("woman", "man", "both", "kids"),
        allowNull: false,
      },
      isNew: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isPick: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      sale: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { tableName: "Product", freezeTableName: true, timestamps: false }
  );
  return Product;
};

module.exports = productModel;
