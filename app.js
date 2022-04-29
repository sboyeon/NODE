const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('node start1');
    res.end('node start2');
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//호스트네임 포트는 변수명(=부르기 위해 사용), ${변수명}; 방식으로 사용
//``로 닫기 사용