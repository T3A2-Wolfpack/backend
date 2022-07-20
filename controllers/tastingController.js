// import whiskey model
const Tasting = require("../models/tastingModel");
const mongoose = require("mongoose");

// GET all tastings for a whiskey
const tasting_index = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  const tastings = await Tasting.find({whiskey: id});

  if (!tastings) {
    return res.status(404).json({ error: "No tastings" });
  }

  res.status(200).json(tastings);
};

// Get a single tasting for whiskey
const tasting_details = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  const tasting = await Tasting.findById(id);

  if (!tasting) {
    return res.status(404).json({ error: "No such whiskey" });
  }

  res.status(200).json(tasting);
};


// POST a tasting for a whiskey
const tasting_create = async (req, res) => {
  const { visual, nose, palate, finish, finalComment, finalRating, whiskey_id, user_id} = req.body;


  // add doc to db
  try {
    const tasting = await Tasting.create({
      visual,
      nose,
      palate,
      finish,
      finalComment,
      finalRating,
      whiskey_id,
      user_id
    });
    res.status(200).json(tasting);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};


// DELETE a tasting
const tasting_delete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such tasting" });
  }

  const tasting = await Tasting.findOneAndDelete({ _id: id });

  if (!tasting) {
    return res.status(404).json({ error: "No such tasting" });
  }

  res.status(200).json(tasting);
};

module.exports = {
  tasting_index,
  tasting_create,
  tasting_delete,
  tasting_details
};
