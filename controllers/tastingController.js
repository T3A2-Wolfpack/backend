// import whiskey model
const Tasting = require("../models/tastingModel");
const mongoose = require("mongoose");

const tasting_create = async (req, res) => {
  const { visual, nose, whiskey, user} = req.body;

  // add doc to db
  try {
    const tasting = await Tasting.create({
      visual,
      nose,
      whiskey,
      user
    });
    res.status(200).json(tasting);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  tasting_create,
};
