const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  first_name :String,
  last_name :String,
  userId :String,
  email :String,
  packageId :String,
  packagePrice :Date,
  PackageName :String,
  bookingDate :Date
});

module.exports = mongoose.model("book", bookingSchema);
