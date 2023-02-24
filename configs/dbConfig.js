const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://sharad:sharad123@cluster0.iruetsm.mongodb.net/NodeJsTask?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Running"))
  .catch(() => console.log("error"));
