const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors');
const jwt = require('jsonwebtoken')
const User = require('./models/userregistration')
const PORT = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.json())

app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));

app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', "http://localhost:4200");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;


// app.get('/login',function(req,res){
//     res.send("ok");
//     console.log(req.body);
// })

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
        });
    });
    // mongoose.connect('mongodb://127.0.0.1:27017/Aptipro' ,{
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true
    // }, function(err, db) {
    //     console.log(db);
    //     if (err) throw err;
    //     db.models("User").insertOne(details, function(err, res) {
    //       if (err) throw err;
    //       console.log("1 document inserted");
    //       db.close();
    //     });
    // });
    // const token = jwt.sign(req.body,'secrertkey')
    // console.log(token);
    // res.status(200).send({token})
})

app.listen(PORT, () => {
    // mongoose.connect(
    //     'mongodb://127.0.0.1:27017' ,{
    //         useNewUrlParser: true,
    //         useCreateIndex: true,
    //         useFindAndModify: false,
    //         useUnifiedTopology: true
    //     }
    // )
    // .then(() => console.log('DB Connection Successfull'))
    // .catch((err) => {
    //     console.error(err);
    // });
    console.log('server running on port ' + PORT);
})