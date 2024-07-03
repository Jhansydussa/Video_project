var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var conString = "mongodb://127.0.0.1:27017";
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var app = express;
app.get('/',(req,resp)=>{
    resp.send(`<h1>HEllo  Ganesh !!!!</h1>`)
})
app.get('/login',(req,res)=>{
    
})
app.listen(4040);
console.log("server Started")