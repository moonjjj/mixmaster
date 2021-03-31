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


// var http = require('http');
// var fs = require('fs');
// var app = http.createServer(function(request,response){
//     var url = request.url;
//     if(url == '/'){
//       url = '/index.html';
//     }
//     response.writeHead(200);
//     response.end(fs.readFileSync(__dirname + url));

// });
// app.listen(3000);