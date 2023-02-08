const mongoose = require("mongoose");

const userregistrationSchema = new mongoose.Schema({
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    state : {
        type : Date,
        required : true
    },
    Zipcode : {
        type : Number,
        required : true
    },
    gcollege : {
        type : String,
        required : true
    },
    gfrom : {
        type : Date,
        required : true
    },
    gto : {
        type : Date,
        required : true,
    },
    interpassyear : {
        type : String,
        required : true
    },
    intercollegename : {
        type : String,
        required : true
    },
    ugqualification : {
        type : String,
        required : true
    },
    ugcollegename : {
        type : String,
        required : true
    },
    pgqualification : {
        type : String,
        required : true
    },
    pgcollege : {
        type : String,
        required : true
    }
})

const User = new mongoose.model("User", userregistrationSchema);

module.exports = User;