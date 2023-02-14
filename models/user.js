const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phone : {
        type : Number,
        required : true,
        unique : true
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;