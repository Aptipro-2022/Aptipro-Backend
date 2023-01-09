const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors');
const jwt = require('jsonwebtoken')
const User = require('./models/userregistration')
const PORT = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.json())
app.use(cors());

var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;


app.post('/userdetails',function(req,res){
    
    let user;
    console.log(req.body);
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, function(err, db) {
        var dbo = db.db("Aptipro");
        if (err) throw err;
        console.log("Switched to "+db.databaseName+" database");
        dbo.collection("Userdetails").findOne(req.body, function(err, result) {
            if (err) throw err;
            user = result;
            console.log(user);
            res.send(user);
            db.close();
        });
    })
})

app.post("/login",function(req,res){
    let details = req.body;
    console.log(details);

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, function(err, db) {
        var dbo = db.db("Aptipro");
        if (err) throw err;
        console.log("Switched to "+db.databaseName+" database");
    
        dbo.collection("User").insertOne(details, function(err, res) {
            if (err) throw err;
            console.log(res.insertedCount+" documents inserted");
            db.close();
            res.status(200);
        });
    });
    // const token = jwt.sign(req.body,'secrertkey')
    // console.log(token);
    // res.status(200).send({token})
})

app.post("/register",function(req,res){
    let details = req.body;
    console.log(details);

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, function(err, db) {
        var dbo = db.db("Aptipro");
        if (err) throw err;
        console.log("Switched to "+db.databaseName+" database");
    
        dbo.collection("Userdetails").insertOne(details, function(err, res) {
            if (err) throw err;
            console.log(res.insertedCount+" documents inserted");
            db.close();
        });
    });
    res.status(200).send("ok")
})



app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
})