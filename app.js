
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//정적 파일 내보내기 미들웨어준비. 정적 파일의 path.
//127.0.0.1:3000/sample.png, 127.0.0.1:3000/sample.txt 이렇게 접근하면 
//public 내부의 sample.jpg와 sample.txt가 client에게 전달됨.
app.use(express.static('public'));


//post 값을 받기 위해 body-parser 라는 미들웨어 준비.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//아래처럼 img 태그를 이용하여 이미지를 보여줄 수 도 있음.
app.get('/getImg', function(req, res){
  res.send('<img src="/sample.png"/>');
});


//get 방식으로 client로부터 데이터를 받는다.
//http://localhost:3000/sendData/눈가락/123 이렇게 보내면 req.params.* 으로 값을 받는다.
app.get('/sendData/:id/:pw', function(req, res){
  res.send('your data : '+ req.params.id +" "+req.params.pw);
});



//post 방식으로 client로부터 데이터를 받는다.
//post 의 body 에 id 와 pw를 넣고 서버로 날리면, 아래처럼 req.body.* 으로 값을 받는다.
app.post('/sendData', function(req,res){
  if (!req.body) return res.sendStatus(400)
  res.send(req.body.id+" "+req.body.pw)
});



app.get('/test', function (req, res) {
  res.send('Hello Routing Test!');
});


//json으로 응답 보내기.
app.post('/getjson', function (req, res) {
  var json = req.body;
  console.log(json);

  res.json({test: "test", test2: 2});
});


// 3000의 root 경로로 들어오는 것들은 여기서 잡는다.
app.get('/', function (req, res) {
  res.send('Hello World!');
});


//3000 번 포트로 들어오는 것들을 잡는다(listen)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


