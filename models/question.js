const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionModel = new Schema({
  question_id: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("questions", questionModel);

module.exports = model;
