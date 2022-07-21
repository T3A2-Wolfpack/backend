const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const users_index = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ status: "ok", users });
  } catch (err) {
    res.json({ status: "error" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.registerStatic(name, email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ name, email, _id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.loginStatic(email, password);
    const name = user.name;
    const _id = user._id;
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ name, email, _id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  users_index,
};
