const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.use(express.urlencoded({ extended: true })), app.use(express.json());

// const productRouter = require("./routes/product");
// app.use("/", productRouter);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
