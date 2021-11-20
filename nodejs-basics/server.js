/** HTTP Module */
const http = require('http');
const host =  'localhost';
const port = 8080;
const server  = http.createServer((req, res) => {
  res.writeHead(200);
  if(req.url === "/"){
    res.write('HELLO WORLDDDDD');
  }
  res.end();
});

server.on('connection', (socket) => {
  console.log('New connection at');
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

console.log(`Listening to http://${host}:${port}...`);