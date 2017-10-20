/*
* Author: Alex P
* Project Name: Eat the Burger
* Version: 1
* Date:  10.19.17
* GitHub: github.com/itsokayitsofficial/burger
* Heroku:
*/

// Variable - Dependency
var connection = require("./connection.js");

// ORM - Object
var orm = {
//   selectParties: function(table, orderCol) {
//     var queryString = "SELECT * FROM ?? ORDER BY ?? DESC";
//     console.log(queryString);
//     connection.query(queryString, [table, orderCol], function(err, result) {
//       console.log(result);
//     });
//   },

  selectBurger: function(table, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE party_name = ?";
    connection.query(queryString, [table, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },

//   findClient: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//     var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

//     connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
//       console.log(result);
//     });
  }
};

// Export - ORM
module.exports = orm;