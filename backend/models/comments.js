const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  questions: String,
  answer: String,
});

module.exports = mongoose.model("comment", commentSchema);