
var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});
		
		res.end('<!DOCTYPE HTML><html><head>ta charset="utf-8"><title>FuryKars I</title></head><body> <iframe allowtransparency="true" width="1000" height="402" src="//scratch.mit.edu/projects/embed/64055344/?autostart=false" frameborder="0" allowfullscreen></iframe></body></html>');
	
}).listen(4001);