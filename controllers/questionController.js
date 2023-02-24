const mongodb = require("../configs/dbConfig");
const questionModel = require("../models/question");

exports.getQuestions = async (req, res) => {
  questionModel
    .find({})
    .then((data) => {
      return res.json({ data: data });
    })
    .catch((e) => {
      return res.json({
        message: "No questions found!",
      });
    });
};

exports.getSingleQuestion = async (req, res) => {
  questionModel
    .find({ question_id: req.params.id })
    .then((data) => {
      return res.json(data[0]);
    })
    .catch((e) => {
      return res.json({
        message: "No question found for this id.",
      });
    });
};
