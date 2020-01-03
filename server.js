require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

/* 
  This project needs a database! Feel
  free to use Mongoose or the MongoDB
  Node.js driver.
*/
// mongoose.connect(process.env.DB_URI);

/* 
  This project needs to parse POST bodies.
  You should mount body-parser here.
*/

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
  });

// Your first API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ greeting: 'Hello API' });
});

const portNum = process.env.PORT || 3000;

// Listen for requests
app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});

module.exports = app; // For testing
