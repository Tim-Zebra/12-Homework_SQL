
// Packages and apps
const inquirer = require('inquirer-promise');
const mysql = require('mysql2');

// Filters needing to double define object calling const's as prompts.prompts.mainMenu
const prompts = require('./prompts.js').prompts;
// Connects db
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'abc123',
      database: 'businessManager_db'
    },
    console.log(`Connected to the businessManager_db database.`)
  );

async function traverse() {
    const traverseDB = true;
    // while(traverseDB === true) {
    console.log(prompts);
    console.log('these the prompts', prompts.mainMenu);
    
    // }

    // Exit prompt






}

// Inquirer prompts


// db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//     console.log('\n COUNTS \n');
//     console.log(results);
//     console.log('\n COUNTS \n');
//   });
  
//   db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//     console.log('\n SELECT SUM \n');
//     console.log(results);
//     console.log('\n SELECT SUM \n');
//   });

module.exports = traverse;