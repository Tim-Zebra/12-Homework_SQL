
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

const promiseDb = db.promise();

// Traverses the database
const traverse = async () => {
    let traverseDB = true;

    while(traverseDB === true) {
        // Selection variable
        let prompt = '';

        // Main menu
        prompt = await mainMenu(prompts.mainMenu);
        
        // View all departments
        if (prompt === 'View all departments') {
            prompt = await viewDept(prompts.deptMenu);
        }
        // View all roles
        if (prompt === 'View all roles') {
            prompt = await viewRoles(prompts.roleMenu);
        }
        // View all employees
        if (prompt === 'View all Employees') {
            prompt = await viewEmps(prompts.empMenu);
        }
        // Add a department
        if (prompt === 'Add a department') {
            prompt = await addDept(prompts.deptAdd);
        }
        // Add a role
        if (prompt === 'Add a role') {
            prompt = await addRole(prompts.roleAdd);
        }
        // Add an employee
        if (prompt === 'Add a employee') {
            prompt = await addEmp(prompts.empAdd);
        }
        // Update an employee
        if (prompt === 'Update an employee role') {
            prompt = await updateEmp(prompts.empUpdate);
        }
        // Exit traverse
        if (prompt === "Quit") {
            traverseDB = false;
        }
    }
    process.exit();
}

// Gets response from main menu
const mainMenu = async prompts => {
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.mainMenu);

    return choice;
}

// View departments
const viewDept = async prompts => {
    // View departments
    await promiseDb.query('SELECT * FROM businessmanager_db.department;')
    .then(results => {
        console.table(`\n ${results} \n`);
    })
    .catch(err => {
        throw err;
    });
    
    // Option to add viewDept
    // Back option (back to main menu)
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.deptMenu);

    return choice;
}

// View all roles
const viewRoles = async prompts => {
    // View roles
    await promiseDb.query('SELECT * FROM businessmanager_db.role;', (err, results) => {
        console.table(`\n ${results} \n`);
    });
    // Option to add viewDept
    // Back option (back to main menu)
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.roleMenu);

    return choice;
}
// View all employees
const viewEmps = async prompts => {
    // View employees
    await promiseDb.query('SELECT * FROM businessmanager_db.employee;', (err, results) => {
        console.table(`\n ${results} \n`);
    });
    // Option to add viewDept
    // Back option (back to main menu)
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.empMenu);

    return choice;
}



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