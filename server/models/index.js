"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Product = require("./Product")(sequelize);
db.Image = require("./Image")(sequelize);
db.Size = require("./Size")(sequelize);
db.Tag = require("./Tag")(sequelize);
db.Review = require("./Review")(sequelize);
db.ColorQuantity = require("./ColorQuantity")(sequelize);

// 관계 형성
db.Product.hasMany(db.Image);
db.Product.hasMany(db.Size);
db.Product.hasMany(db.Tag);
db.Product.hasMany(db.Review);
db.Size.hasMany(db.ColorQuantity);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
