require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(() => {
  console.log("Database is running...");
});

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
