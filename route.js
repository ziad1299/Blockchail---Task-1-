var express = require('express');
var app = express.Router();

app.get('/', function(req, res, next){
    res.send('hello');
});


module.exports = app;