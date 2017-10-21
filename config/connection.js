/*
* Author: Alex P
* Project Name: Eat the Burger
* Version: 1
* Date:  10.19.17
* GitHub: github.com/itsokayitsofficial/burger
* Heroku:
*/

// Variable - Dependencies
let mysql = require("mysql");
let key = require("./keys.js");

// Variable - Connection params to MySQL db
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: key.password,
  database: "burgers_db"
});

// Connect - Feedback on db connection
connection.connect(function(error) {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Export - connection
module.exports = connection;
