const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type: text/html'});
    const data = fs.readFile('./test.html');
    console.log(data);
    res.end(data);
    
    });
});


//fs.readFile('test.html', function(err, data)) {
        //res.writeHead(200, {'Content-Type: text/html'});
       // res.write(data);
        //return res.end();


    //res.statusCode = 200;
    //res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
    //res.write("노드'node'")
    //res.write('노드"node"')
    //const data = awit.fs.readFile("./test.html");
    //res.end(data);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});