var exec    = require('exec');
var express = require('express');
var app = express();

var scriptName = './run.sh'

app.get('/', function(req, res){
  exec([scriptName], function(err, out, code) {
    if (err instanceof Error) {
      res.status(500).send(err);
    }
    res.send(out);
  });
});

var server = app.listen(8080, function() {
  console.log('Listening on port %d', server.address().port);
});