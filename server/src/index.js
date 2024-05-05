const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

const userManagementRoutes = require("./routes/userRoutes");
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());

app.use("/api/users", userManagementRoutes);

mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
