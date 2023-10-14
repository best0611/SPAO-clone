const { DataTypes } = require("sequelize");

const tagModel = (sequelize) => {
  const Tag = sequelize.define(
    "Tag",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tag: {
        type: DataTypes.ENUM(
          "무료배송",
          "무료반품",
          "여성용",
          "남성용",
          "남녀공용",
          "셋업상품"
        ),
      },
    },
    {
      tableName: "Tag",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Tag;
};

module.exports = tagModel;
