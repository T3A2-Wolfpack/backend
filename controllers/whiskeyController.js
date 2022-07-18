// import whiskey model
const Whiskey = require("../models/whiskeyModel");
const mongoose = require("mongoose");

// GET all whiskeys
const whiskey_index = async (req, res) => {
  console.log(mongoose.models)
  const whiskeys = await Whiskey.find().sort({ createdAt: -1 });

  res.status(200).json(whiskeys);
};

// GET one whiskey
const whiskey_details = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  const whiskey = await Whiskey.findById(id);

  if (!whiskey) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  res.status(200).json(whiskey);
};

// create new whiskey
const whiskey_create = async (req, res) => {
  const { name, age, region, type, price, image } = req.body;

  // add doc to db
  try {
    const whiskey = await Whiskey.create({ name, age, region, type, price, image });
    res.status(200).json(whiskey);
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message });
  }
};

// DELETE a whiskey
const whiskey_delete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  const whiskey = await Whiskey.findOneAndDelete({ _id: id });

  if (!whiskey) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  res.status(200).json(whiskey);
};

// PATCH a whiskey
const whiskey_update = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  const whiskey = await Whiskey.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!whiskey) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  res.status(200).json(whiskey);
};

module.exports = {
  whiskey_create,
  whiskey_index,
  whiskey_details,
  whiskey_delete,
  whiskey_update,
};
