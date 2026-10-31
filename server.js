// ─────────────────────────────────────────────
//  Lab 1 – Express Server
//  Run: npm start  (or  node server.js)
//  Endpoints:
//    GET /        → Welcome message (200)
//    GET /about   → JSON with name and section (200)
//    GET /time    → Current date and time (200)
//    GET *        → 404 Not Found
// ─────────────────────────────────────────────
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// ── GET / ──────────────────────────────────────
app.get('/', (req, res) => {
  console.log(`[${new Date().toISOString()}] GET /  →  200`);
  res.status(200).send('Welcome to Lab 1 – Node.js and Express Server!');
});

// ── GET /about ─────────────────────────────────
app.get('/about', (req, res) => {
  console.log(`[${new Date().toISOString()}] GET /about  →  200`);
  res.status(200).json({
    name: 'Sivaram',               // Student name
    section: 'Your Section',       // TODO: replace with your actual section
    lab: 'Lab 1 – Node.js and Express Server',
    course: 'Backend Development Fundamentals',
  });
});

// ── GET /time ──────────────────────────────────
app.get('/time', (req, res) => {
  const now = new Date();
  console.log(`[${now.toISOString()}] GET /time  →  200`);
  res.status(200).json({
    currentTime: now.toISOString(),
    readable: now.toString(),
  });
});

// ── 404 catch-all ──────────────────────────────
app.use((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}  →  404`);
  res.status(404).json({ error: '404 – Route not found' });
});

// ── Start server ───────────────────────────────
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
  console.log('Routes: GET /   GET /about   GET /time');
});
