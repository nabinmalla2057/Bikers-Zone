const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const validateEmail = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const userSchema = new Schema({
  name: { type: "String", require: "full name needed..." },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {},
  ...commonSchema,
});

module.exports = model("User", userSchema);
