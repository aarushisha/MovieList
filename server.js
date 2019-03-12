var express = require('express');
var http = require('http');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public/'));

app.post('/addMovie', function(req, res) {

})

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

db.connect();

db.query('CREATE DATABASE IF NOT EXISTS movies', function(error, results, fields) {
  if (error) {
    console.log('there was an error in creating the database -------------', error);
  } else {
    console.log('database creation complete---------------', results);
  }
});

db.query('USE movies', function(error, results, fields) {
  if (error) {
    console.log('there was an error in creating the database -------------', error);
  } else {
    console.log('using database---------------', results);
  }  
})
var tableQuery = "CREATE TABLE IF NOT EXISTS movie (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title CHAR, watched BOOLEAN NOT NULL DEFAULT 0)";
db.query(tableQuery, function(error, results, fields) {
  if (error) {
    console.log('there was an error in creating the database -------------', error);
  } else {
    console.log('table creation complete---------------', results);
  }
})


app.listen(2020, function() {
  console.log('listening on port 2020');
});