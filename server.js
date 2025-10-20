// A simple Node.js server to serve static content
const http = require('http');
const fs = require('fs');
const path = require('path'); // <-- Added path module
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // Use path.join to create a reliable, absolute path to index.html
  const filePath = path.join(__dirname, 'aws.html'); 
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If the file load fails, send a 500 error for debugging
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
