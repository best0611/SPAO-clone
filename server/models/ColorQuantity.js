const { DataTypes } = require("sequelize");

const colorquantityModel = (sequelize) => {
  const ColorQuantity = sequelize.define(
    "ColorQuantity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      color: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      sold: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "ColorQuantity", freezeTableName: true, timestamps: false }
  );
  return ColorQuantity;
};

module.exports = colorquantityModel;
