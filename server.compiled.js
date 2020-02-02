"use strict";

var express = require('express');

var PORT = process.env.HTTP_PORT || 4001;
var app = express();

var path = require('path');

app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('This is an AWS tut');
});
app.get('/me', function (req, res) {
  res.json({
    name: 'Robert',
    colour: 'Black-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
