const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
  siteName: String,
  totalEarnings: Number,
  totalBooked: Number,
});

module.exports = mongoose.model("site", siteSchema);