
var express = require('express');
var app = express();


// 3000의 root 경로로 들어오는 것들은 여기서 잡는다.
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {
  res.send('Hello Routing Test!');
});

//3000 번 포트로 들어오는 것들을 잡는다(listen)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


