const { DataTypes } = require("sequelize");

const sizeModel = (sequelize) => {
  const Size = sequelize.define(
    "Size",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      size: {
        type: DataTypes.ENUM("small", "medium", "large"),
        allowNull: false,
      },
    },
    {
      tableName: "Size",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Size;
};

module.exports = sizeModel;
