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

// ORM - Object
let orm = {

  // Function - Get all from name col in either table
  selectAll: function (tableName, callback) {
    let queryString = "SELECT name, burger_desc, burger_cost FROM ?? ORDER BY name";
    console.log(queryString);
    connection.query(queryString, [tableName], function (error, result) {
      console.log(result);
      callback(result);
    });
  },

  // Function - Insert new burger into burgers table
  insertBurger: function (burger_name, desc, cost, callback) {
    let queryString = "INSERT INTO burgers (name, burger_desc, burger_cost) VALUES (??, ??, ??)";
    console.log(queryString);
    connection.query(queryString, [burger_name, desc, cost], function (error, result) {
      console.log(result);
      callback(result);
    });
  },

  // Function - Insert new ingredient into ingredients table
  insertIng: function (ing_name, callback) {
    let queryString = "INSERT INTO ingredients (name) VALUES (??)";
    console.log(queryString);
    connection.query(queryString, [ing_name], function (error, result) {
      console.log(result);
      callback(result);
    });
  },

  // Function - Update burger in burgers table
  updateOne: function (colName, cellName, colVal, cellVal, callback) {
    let queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [colName, cellName, colVal, cellVal], function (error, result) {
      console.log(result);
      callback(result);
    });
  }

};

// Export - ORM
module.exports = orm;