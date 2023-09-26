const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const userSchema = new Schema({
  name: {},
  email: {},
  password: {},
});

module.exports = model("User", userSchema);
