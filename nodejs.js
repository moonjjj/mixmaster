// mysql dbms연결
var mysql = require('mysql');
var client = mysql.createConnection({
    user:'root',
    password:'123123123',
    database:'my_db'
});
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);
// 멤버 목록
app.all('/list',function(request,response){
    var sql = 'select * from member';
    client.query(sql,function(error,result){       
    //  console.log(result);
        response.send(result)
    });
});
// 멤버 추가
app.all('/add',function(request,response){
    var id = request.param('id');
    var pw = request.param('pw');
    var name = request.param('name');
    var age = request.param('age');
    var gender = request.param('gender');
   
    var sql = "insert into member(id,pw,name,age,gender) values(?,?,?,?,?)";
    client.query(sql,
                [id,pw,name,age,gender],
                function(error,result){
                    response.send(id);
    });
});
// 멤버 삭제
app.all('/remove',function(request,response){
    var ck = request.param('ck'); // 배열
    for(var i=0; i<ck.length;i++){
        var sql = 'delete from member where id=?';
        client.query(sql,[ck[i]],function(){});
    }
    response.send(ck);
});
// 멤버 수정
app.all('/modifyById',function(request,response){
    var id = request.param('id');
    var pw = request.param('pw');
    var name = request.param('name');
    var age = request.param('age');
    var gender = request.param('gender');
   
    var sql = "update member set pw=?,name=?,age=?,gender=? where id=?";
    client.query(sql,
                [pw,name,age,gender,id],
                function(error,result){
                    response.send(id);
    });
});
 
http.createServer(app).listen(80,function(){
    console.log('Server Running at http://127.0.0.1');
});

