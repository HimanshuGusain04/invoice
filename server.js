// Require packages
var express = require('express');
var config = require('./config');
var app = express();

// Homepage
app.get('/', function (req, res) {
  res.send('Homepage!');
  console.log("Homepage accessed");
});

// Invoice page
app.get('/invoice', function (req, res) {
  res.send('Invoice Page!');
  console.log("Invoice Page accessed");
});

// Search page
app.get('/search', function (req, res) {
  res.send('Search!');
  console.log("Search accessed");
});

// 404 page
app.get('*', function(req, res){
  res.send('404 page', 404);
});


// Start server
app.listen(config.port,function(err){

	if (err) {
		console.log(err);
	} else {
		console.log('Server running on port: ' + config.port);
	}
	
});
