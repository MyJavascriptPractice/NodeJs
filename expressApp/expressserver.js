//in this directory write: node expressserver.js

var express = require('express'),
	app		= express();

app.get('/', function(req, res){
	res.send('hello world');
});
//.listen(3000);



//Alternative method to appending like above

app.listen(3000, function(){
	console.log("listening on port 3000");
});
