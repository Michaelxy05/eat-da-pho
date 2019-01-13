var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ep9dm8nbo8473ff4",
  password: process.env.DB_DATABASE,
  database: "	yq3730689hsem90l"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
