const bcrypt = require("bcrypt");
const saltRound = 10;

const Model = require("./user.model");

const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = await bcrypt.hash(password, saltRound);

  return Model.create(rest);
};

const login = (email, password) => {};

module.exports = { create, login };
