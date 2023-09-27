const bcrypt = require("bcrypt");
const saltRound = 10;

const Model = require("./user.model");

const create = async (payload) => {
  const { password, ...rest } = payload;
  const result = await bcrypt.hash(myPlaintextPassword, saltRound);

  return Model.create(payload);
};

const login = (email, password) => {};

module.exports = { create, login };
