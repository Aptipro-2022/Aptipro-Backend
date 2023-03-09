const mongoose = require("mongoose");
var mongoDB = '';
if(process.env.PORT == 3000) {
  mongoDB = "mongodb://127.0.0.1:27017/Aptipro";
} else {
  mongoDB = "mongodb+srv://codingoclub:NQBZT6pPaSh1EbGA@cluster0.osdzcoe.mongodb.net/?retryWrites=true&w=majority"
}
mongoose.set("strictQuery", false);
console.log(mongoDB);
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Running"))
  .catch(() => console.log("error"));
