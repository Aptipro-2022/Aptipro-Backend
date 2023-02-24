const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
// let Userdetails = require("./models/userregistration");
// let User = require("./models/user");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/verify", require("./routes/verify"));
app.use("/question", require("./routes/question"));

module.exports = app;
