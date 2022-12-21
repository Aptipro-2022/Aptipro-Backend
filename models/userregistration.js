const mongoose = require("mongoose");

const userregistrationSchema = new mongoose.Schema({
    FirstandLastname : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

const User = new mongoose.model("User", userregistrationSchema);

module.exports = User;