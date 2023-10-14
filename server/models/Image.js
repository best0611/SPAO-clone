const { DataTypes } = require("sequelize");

const imageModel = (sequelize) => {
  const Image = sequelize.define(
    "Image",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      small: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      big: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { tableName: "Image", freezeTableName: true, timestamps: false }
  );
  return Image;
};

module.exports = imageModel;
