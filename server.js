/*
* Author: Alex P
* Project Name: Eat the Burger
* Version: 1
* Date:  10.19.17
* GitHub: github.com/itsokayitsofficial/burger
* Heroku:
*/


// Variables - Dependencies
let express = require("express");
let PORT = process.env.PORT || 3000;
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");
let bodyParser = require("method-override");
let routes = require('./controllers/burgers_controller.js');

//Express Setup
var app = express();
// Express - Static
app.use(express.static(process.cwd() + '/public'));
// Express - Body parser
app.use(bodyParser.urlencoded({
	extended: false
}));
// Express - Method override
app.use(methodOverride('_method'));
// Express - Handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Express - Routes
app.use('/', routes);
// Express - Listen
app.listen(PORT);
console.log('Listening on port: ' + PORT);