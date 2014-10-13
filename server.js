var exec    = require('exec');
var express = require('express');
var readline = require('readline');
var app = express();

var latestLine = "No lines read yet"

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line){
  latestLine = line
})

app.get('/', function(req, res){
  res.send(latestLine)
});

var server = app.listen(8080, function() {
  console.log('Listening on port %d', server.address().port);
});