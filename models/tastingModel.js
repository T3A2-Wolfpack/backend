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
        type: String,
        required: true,
      },
    },
    nose: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
    },
    palate: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
    },
    finish: {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
    },
    finalComment: {
      type: String,
      required: true
    },

    whiskey_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "whiskey",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasting", tastingSchema);
