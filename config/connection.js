var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "	muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3307,
  user: "v98bljykr7i2g70u",
  password: process.env.DB_DATABASE,
  database: "akbe7pk8gzueku96"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
