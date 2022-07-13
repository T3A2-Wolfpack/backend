const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whiskeySchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    region: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("whiskey", whiskeySchema);
