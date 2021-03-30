var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123123123',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT * FROM my_db.Users;', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();