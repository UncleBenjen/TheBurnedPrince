//DEPENDENCIES
var express = require('express');
var path = require('path');

//EXPRESS APP & VIEW ENGINE
var app = express();

//CONFIG APP
app.use( express.static(__dirname + '/public') );	//Set static file directory

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});								

//HTTP SERVER INSTANTIATION
var http 	= require('http');
var server 	= http.Server(app);
var port 	= process.env.PORT || 7000;

//SERVER EXECUTION
server.listen(port, function(){
  console.log('Server up, listening on ' + port);
});