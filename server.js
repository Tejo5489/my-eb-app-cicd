// A simple Node.js server to serve static content
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});