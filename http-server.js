// ─────────────────────────────────────────────
//  Lab 1 – Step 1: Plain HTTP server (http module)
//  Run: node http-server.js
//  Visit: http://localhost:3000
// ─────────────────────────────────────────────
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`HTTP server running at http://localhost:${PORT}`);
});
