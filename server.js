/*
* Author: Alex P
* Project Name: Eat the Burger
* Version: 1
* Date:  10.19.17
* GitHub: github.com/itsokayitsofficial/burger
* Heroku:
*/

// Variables - Dependencies
var orm = require("./config/orm.js");


// Orm - EXAMPLE
orm.selectBurger("burgers","burger_name","burger_cost","burger_desc");