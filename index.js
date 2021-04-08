var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World!');
  console.log('check')
  res.end();
}).listen(3000);
