// Require packages
var express = require('express');
var config = require('./config');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// Set template engine
app.set('view engine', 'ejs');

// Connect to database
mongoose.connect(config.database,function(err){

if (err) {
  console.log(err);
} else {
  console.log('Connected to database');
}

});

// Body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Creating api
var api = require('./app/routes/api')(app, express);
app.use('/api',api);

// Homepage render using EJS
// app.get('/', function (req, res) {
//   // res.sendFile('views/homepage.html', {root: __dirname })
//   res.setHeader('Content-Type', 'application/json');
//   res.render('views/homepage.html', {test: "test"});

//   console.log("Homepage accessed");
// });



app.use(express.static(__dirname + '/public'));


// Render homepage using EJS template engine
app.get('/', function (req, res) {
 
 res.sendFile(__dirname +  '/public/app/views/index.html')
});

app.get('/api', function (req, res) {
  // res.render('api', {test: "passed data"});
  console.log("api accessed");
});

// app.get('/users', function (req, res) {
//   // res.render('users', json(users));
//   console.log("users accessed");
// });


// Invoice page
app.get('/invoice', function (req, res) {
   const Invoice = require('./models/Invoice')
   Invoice.find()
	.then(doc => {
	   res.json(doc)
   }).catch(err=> {
	   res.json(err)
   })
   
});

// Search page
app.get('/search/:q', function (req, res) {
   const Invoice = require('./models/Invoice')
   Invoice.find({
   name:{$regex: res.params.q, $options: "i"}
        })
	.then(doc => {
	   res.json(doc)
   }).catch(err=> {
	   res.json(err)
   })
});

// 404 page
// app.get('*', function(req, res){
   
// });


// Start server
app.listen(config.port,function(err){

	if (err) {
		console.log(err);
	} else {
		console.log('Server running on port: ' + config.port);
	}
	
});


