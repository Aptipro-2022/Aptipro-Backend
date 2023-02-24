const router = require("express").Router();
const questionController = require("../controllers/questionController");

router.get("/getquestion", questionController.getQuestions);
router.get("/getquestion/:id", questionController.getSingleQuestion);

module.exports = router;
