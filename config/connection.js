/*
* Author: Alex P
* Project Name: Eat the Burger
* Version: 1
* Date:  10.19.17
* GitHub: github.com/itsokayitsofficial/burger
* Heroku:
*/

//
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "scrub",
  database: "parties_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
