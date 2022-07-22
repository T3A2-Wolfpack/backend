const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tastingSchema = new Schema(
  {
    visual: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
    nose: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
    palate: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
    finish: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
    finalRating: {
      type: Number,
      required: false,
    },
    finalComment: {
      type: String,
      required: true,
    },

    whiskey_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "whiskey",
      required: false,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
    user_name: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasting", tastingSchema);
