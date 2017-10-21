/*
 * Author: Alex P
 * Project Name: Eat the Burger
 * Version: 1
 * Date:  10.19.17
 * GitHub: github.com/itsokayitsofficial/burger
 * Heroku:
 */

// Variable - Dependency
let connection = require("./connection.js");
let query = connection.query;


// ORM - Object
let orm = {

  // Function - Get all from name col in either table
  selectAll: function (tableName, callback) {
    var queryString = "SELECT name, burger_desc, burger_cost FROM ? ORDER BY name";
    var queryInput = [tableName];

    query(queryString, queryInput, function (error, result) {

      console.log(result);
      callback(result);
    });
  },

  // Function - Insert new burger into burgers table
  insertBurger: function (burger_name, desc, cost, callback) {
    var queryString = "INSERT INTO burgers (name, burger_desc, burger_cost) VALUES (??, ??, ??)";
    var queryInput = [burger_name, desc, cost];

    query(queryString, queryInput, function (error, result) {

      console.log(result);
      callback(result);
    });
  },

  // Function - Insert new ingredient into ingredients table
  insertIng: function (ing_name, callback) {
    var queryString = "INSERT INTO ingredients (name) VALUES (??)";
    var queryInput = [ing_name];

    connection.query(queryString, queryInput, function (error, result) {

      console.log(result);
      callback(result);
    });
  },

  // Function - Update burger in burgers table
  updateOne: function (colName, cellName, colVal, cellVal, callback) {
    var queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
    var queryInput = [colName, cellName, colVal, cellVal];

    query(queryString, queryInput, function (error, result) {

      console.log(result);
      callback(result);
    });
  }

};

// Export - ORM
module.exports = orm;