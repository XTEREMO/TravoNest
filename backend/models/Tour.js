const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  place :String,
  image :String,
  gallery :[],
  tourPlace :[],
  price :Number,
  duration :Number,
  tag :[],
  activities :[],
  food :[],
  location :String,
  provider :String,
  startDate :Date,
  mode: String,
  tagline:String,
  description:String,
});

module.exports = mongoose.model("tour", tourSchema);

