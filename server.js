// Import NPM and other files
const express = require('express');
const traverseDb = require('./ui/index');

const PORT = process.env.PORT || 3005;
const app = express();

// middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Runs app to traverse db
traverseDb();

// Errors
app.use((req, res) => {
  res.status(404).end();
});

// Shows program initiated
// Created with future online implentation in mind. 
// app.listen(PORT, () => {
//   console.log(`Server running on port http://localhost:${PORT}`);
// });


