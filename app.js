// using expressjs
const lists = require('./core/data');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use('/img', express.static('static/img'));
app.use('/css', express.static('static/css'));
app.use('/js', express.static('static/js'));

app.get('/', function (req, res){
  let doc = fs.readFileSync('./static/index.html', 'utf8');
  res.send(doc);
});

app.get('/GET-MOVIES-CONTENT',function (req, res){
  let dataList = null;

  res.setHeader('Content-Type', 'text/html');
  dataList = lists.getHTML();
  res.send(dataList);
});

app.get('/GET-MOVIES-CONTENT2',function (req, res){
  let dataList = null;

  res.setHeader('Content-Type', 'text/html');
  dataList = lists.getHTML2();
  res.send(dataList);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/GET-MOVIES-Titles',function (req, res){
  let dataList = null;

  res.setHeader('Content-Type', 'text/html');
  dataList = lists.getJSON();
  res.send(dataList);
});

//Error 404
app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
});

//Run SERVER
let port = 3000;
app.listen(port,function (req, res){
  console.log("App listening on port " + port + "!");
});
