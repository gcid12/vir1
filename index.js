
var express = require('express')
  , http = require('http')
  , config = require('./configuration')
  , path = require("path");

var app = express();
var server = app.listen(config.port);
console.log("Express server listening on port "+ config.port);

app.get('/',index);

function index(req,res){
   //res.send('HHello ' + config.say);
   res.sendFile(path.join(__dirname+'/index.html'));
}


