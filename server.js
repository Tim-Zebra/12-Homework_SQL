const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connects db
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Queries 
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log('\n COUNTS \n');
  console.log(results);
  console.log('\n COUNTS \n');
});

db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log('\n SELECT SUM \n');
  console.log(results);
  console.log('\n SELECT SUM \n');
});

// Errors
app.use((req, res) => {
  res.status(404).end();
});

// Shows program initiated
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
