const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      trim: true
    },
    shortUrl: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
