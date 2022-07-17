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

// POST a tasting for a whiskey
const tasting_create = async (req, res) => {
  const { visual, nose, whiskey } = req.body;

  // add doc to db
  try {
    const tasting = await Tasting.create({
      visual,
      nose,
      whiskey
    });
    res.status(200).json(tasting);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  tasting_index,
  tasting_create
};
