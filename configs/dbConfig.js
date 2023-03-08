const mongoose = require("mongoose");
var mongoDB = '';
if(process.env.PORT == 3000) {
  mongoDB = "mongodb://127.0.0.1:27017/Aptipro";
} else {
  mongoDB =
  "mongodb+srv://sharad:sharad123@cluster0.iruetsm.mongodb.net/NodeJsTask?retryWrites=true&w=majority";
}
mongoose.set("strictQuery", false);
console.log(mongoDB);
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Running"))
  .catch(() => console.log("error"));
