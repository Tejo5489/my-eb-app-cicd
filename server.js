const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'aws.html'); 
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error loading index.html:", err);
      res.writeHead(500);
      return res.end('Error: Could not load index.html. Check server logs.');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

