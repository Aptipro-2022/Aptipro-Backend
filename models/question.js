const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionModel = new Schema({
  questionid: {
    type: String,
    required : true
  },
  question: {
    type: String,
    required : true
  },
  option1 : {
    type : String,
    required : true
  },
  option2 : {
    type : String,
    required : true
  },
  option3 : {
    type : String,
    required : true
  },
  option4 : {
    type : String,
    required : true
  },
  hint1 : {
    type : String,
    required : true
  },
  hint2 : {
    type : String,
    required : true
  },
  hint3 : {
    type : String,
    required : true
  },
  hint4 : {
    type : String,
    required : true
  },
  answer : {
    type : String,
    required : true
  }
});

const questionsModel = mongoose.model("Questions", questionModel);

module.exports = questionsModel;
