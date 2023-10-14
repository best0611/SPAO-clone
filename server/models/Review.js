const { DataTypes } = require("sequelize");

const reviewModel = (sequelize) => {
  const Review = sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      img: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      title: { type: DataTypes.STRING(65), allowNull: false },
      content: { type: DataTypes.STRING(255), allowNull: false },
    },
    { tableName: "Review", freezeTableName: true, timestamps: false }
  );
  return Review;
};

module.exports = reviewModel;
