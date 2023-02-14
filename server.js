const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors');
const jwt = require('jsonwebtoken')
let Userdetails = require('./models/userregistration');
const PORT = process.env.PORT || 3000;
let User = require('./models/user');

const app = express()
app.use(bodyParser.json())
app.use(cors());

var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

app.get('/userdetails/:phone',function(req, res){  
    res.send("api hitted");
    let details; 
    console.log("api hitted");
    console.log(req.params);
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, function(err, db) {
        var dbo = db.db("Aptipro");
        if (err) throw err;
        console.log("Switched to "+db.databaseName+" database");
        dbo.collection("Userdetails").findOne(req.params, function(err, result) {
            if (err) throw err;
            else {
                console.log(result);
                res.send(result);
                db.close();
            }
        });
    })
})

app.get('/questions',function(req, res){  
    console.log("questions hitted")
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, function(err, db) {
        var dbo = db.db("Aptipro");
        if (err) throw err;
        console.log("Switched to "+db.databaseName+" database");
        dbo.collection("Questions").find(function(err, result) {
            if (err) throw err;
            else {
                console.log(result);
                res.send(result);
                db.close();
            }
        });
    })
})



app.post('/addquestion',function(req,res){
    
    let questiondetails = req.body;
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
        dbo.collection("Questions").insertOne(questiondetails, function(err, res) {
            if (err) throw err;
            console.log(res.insertedCount+" documents inserted");
            db.close();
            res.send("200 ok");
        });
    })
})

app.post("/login",function(req,res){
    let details = req.body;
    User.phone = req.phone;
    console.log(User);
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

    User = req.body;
    console.log(User);

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
            console.log(result);
            if (err) throw err;
            else if ( result == null ) {
                result = details;
                dbo.collection("Userdetails").insertOne(details, function(err, res) {
                    if (err) throw err;
                    console.log(res.insertedCount+" documents inserted");
                    db.close();
                });
            }
            res.send(result);
        });
    });
})


app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
})