// import user model
const User = require("../models/userModel");
const mongoose = require("mongoose");


// GET all users
const user_index = async (req, res) => {
  console.log(mongoose.models)
  const users = await User.find().sort({ createdAt: -1 });

  res.status(200).json(users);
};

// GET one user
const user_details = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await user.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

// create new user
const user_create = async (req, res) => {
  const { connection, client_id, email, username, password, tenant, transaction, request_language, email_verified } = req.body;

  // add doc to db
  try {
    const user = await user.create({ connection, client_id, email, username, password, tenant, transaction, request_language, email_verified });
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message });
  }
};

// DELETE a user
const user_delete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

// PATCH a user
const user_update = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

module.exports = {
  user_create,
  user_index,
  user_details,
  user_delete,
  user_update,
};
