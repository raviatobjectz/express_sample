var express = require('express');
var ip = require('ip');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! : '+ip.address());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
