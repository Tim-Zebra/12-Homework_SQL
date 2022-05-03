
// Packages and apps
const inquirer = require('inquirer-promise');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

// Filters needing to double define object calling const's as prompts.prompts.mainMenu
const prompts = require('./prompts.js').prompts;

// Connects db
const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
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
        if (prompt === 'View all employees') {
            prompt = await viewEmps(prompts.empMenu);
        }
        // Add a department
        if (prompt === 'Add a department') {
            prompt = await addDept(prompts.addDept);
        }
        // Add a role
        if (prompt === 'Add a role') {
            prompt = await addRole(prompts.addRole);
        }
        // Add an employee
        if (prompt === 'Add an employee') {
            prompt = await addEmp(prompts.addEmp);
        }
        // Update an employee
        if (prompt === 'Update an employee role') {
            prompt = await updateEmp(prompts.updateEmp);
        }
        // Exit traverse
        if (prompt === "Quit") {
            traverseDB = false;
        }
    }
    console.log('\n------------------Good Bye!------------------')
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
    // Gets query
    let query;

    await promiseDb.query('SELECT * FROM businessmanager_db.department;')
    .then(results => {
        query = results[0];
    })
    .catch(err => {
        throw err;
    });

    // Displays departments as table
    console.log('\n\x1b[36m%s\x1b[0m', '-------------------------------------------');
    console.log('\x1b[36m%s\x1b[0m', '            Viewing Departments');
    console.log('\x1b[36m%s\x1b[0m', '-------------------------------------------\n');
    console.table(query);
    console.log('\n');

    // Option to add dept
    // Back option (back to main menu)
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.deptMenu);

    return choice;
}

// View all roles
const viewRoles = async prompts => {
    // Gets query
    let query;

    await promiseDb.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id;')
    .then(results => {
        query = results[0];
    })
    .catch(err => {
        throw err;
    });

    // Displays roles as table
    console.log('\n\x1b[36m%s\x1b[0m', '-------------------------------------------');
    console.log('\x1b[36m%s\x1b[0m', '             Viewing Roles');
    console.log('\x1b[36m%s\x1b[0m', '-------------------------------------------\n');
    console.table(query);
    console.log('\n');
    
    // Option to add role
    // Back option (back to main menu)
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.roleMenu);

    return choice;
}

// View all employees
const viewEmps = async prompts => {
    // Gets query
    let query;

    await promiseDb.query('SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, m.first_name AS manager FROM employee e INNER JOIN role ON e.role_id = role.id  INNER JOIN department ON role.department_id = department.id LEFT JOIN employee m ON m.id = e.manager_id;')
    .then(results => {
        query = results[0];
    })
    .catch(err => {
        throw err;
    });

    // Displays employees as a table
    console.log('\n\x1b[36m%s\x1b[0m', '---------------------------------------------------------------------------');
    console.log('\x1b[36m%s\x1b[0m', '                              Viewing Employees');
    console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------------------------------\n');
    console.table(query);
    console.log('\n');
    
    // Option to add employee
    // Back option (back to main menu)
    let choice = '';
    await inquirer
        .prompt(prompts)
        .then(response => choice = response.empMenu);

    return choice;
}

// Add deparment
const addDept = async prompts => {
    // Obtains department info
    let id = '';
    let name = '';
    await inquirer
        .prompt(prompts)
        .then(response => {
            id = response.id;
            name = response.name;
        });

    // Adds deptartment info to db
    const sql = `INSERT INTO department VALUES (?,?);`
    const data = [id,name];
    await promiseDb.query(sql, data)
        .then(results => {
            // logs success
            console.log('\n\x1b[32m', 'Department successfull added!', '\x1b[37m\n');
        })
        .catch(err => {
            // logs error
            console.log('\n\x1b[31m', '------------------------------------------------!!Duplicate Entry!!------------------------------------------------', '\x1b[37m\n')
            console.log(`ERROR: The id: #${id} is already in use.\n\nReturning to main menu...\n`);
        });
}

// Add role
const addRole = async prompts => {
    // Obtains department info
    let id = '';
    let title = '';
    let salary = '';
    let deptId = '';
    await inquirer
        .prompt(prompts)
        .then(response => {
            id = response.id;
            title = response.title;
            salary = response.salary;
            deptId = response.deptId;
        });

    // Adds deptartment info to db
    const sql = `INSERT INTO role VALUES (?,?,?,?);`
    const data = [id,title,salary,deptId];
    await promiseDb.query(sql, data)
        .then(results => {
            // logs success
            console.log('\n\x1b[32m', 'Role successfull added!', '\x1b[37m\n');
        })
        .catch(err => {
            // logs error            
            console.log('\n\x1b[31m', '------------------------------------------------!!Duplicate Entry!!------------------------------------------------', '\x1b[37m\n')
            console.log(`ERROR: The id: #${id} is already in use.\n\nReturning to main menu...\n`);
        });
}

// Add employee
const addEmp = async prompts => {
    // Obtains department info
    let id = '';
    let first_name = '';
    let last_name = '';
    let role_id = '';
    let manager_id = '';
    await inquirer
        .prompt(prompts)
        .then(response => {
            id = response.id;
            first_name = response.first_name;
            last_name = response.last_name;
            role_id = response.role_id;
            manager_id = response.manager_id;
        });

    // Adds deptartment info to db
    const sql = `INSERT INTO employee VALUES (?,?,?,?,?);`
    const data = [id,first_name,last_name,role_id,manager_id];
    await promiseDb.query(sql, data)
        .then(results => {
            // logs success
            console.log('\n\x1b[32m', 'Employee successfull added!', '\x1b[37m\n');
        })
        .catch(err => {
            // logs error
            console.log('\n\x1b[31m', '------------------------------------------------!!Duplicate Entry!!------------------------------------------------', '\x1b[37m\n')
            console.log(`ERROR: The id: #${id} is already in use.\n\nReturning to main menu...\n`);
        });
}       

// Update employee
const updateEmp = async prompts => {
     // Get the list of employees from the db, returns as an array of objects
    let query;

    await promiseDb.query("SELECT id, first_name, last_name, role_id, manager_id, CONCAT(first_name,' ',last_name) AS full_name FROM employee;")
    .then(results => {
        query = results[0];
    })
    .catch(err => {
        throw err;
    });

    // Extracts employees into an array
    let nameArray = [];

    for (let k = 0; k < query.length; k++) {
        let value = query[k].full_name;
        nameArray.push(value);
    }

    // Sets employees as choices
    prompts[0].choices = nameArray;
    
    // Choose who you are going to update
    let who = '';
    await inquirer
        .prompt(prompts[0])
        .then(response => {
            who = response.updateEmp;
        });

    // Choose what you are going to update
    let what = '';
    await inquirer
        .prompt(prompts[1])
        .then(response => {
            what = response.updateOptions;
        });

    // Create the new value
    let value = '';
    await inquirer
        .prompt(prompts[2])
        .then(response => {
            value = response.updateValue;
        });

    // Find the coresponding employee object
    let currentEmployee;
    for (let k = 0; k < query.length; k++) {
        if (query[k].full_name === who) {
            currentEmployee = query[k];
        }
    }

    // Decides which sql syntax to use based on string value
    let sql;
    if (typeof what === 'string') {
        sql = `UPDATE employee SET ${what} = '${value}' WHERE id = ${currentEmployee.id};`
    } else {
        sql = `UPDATE employee SET ${what} = ${value} WHERE id = ${currentEmployee.id};`
    }

    // Updates the db
    await promiseDb.query(sql)
        .then(results => {
            // logs success
            console.log('\n\x1b[32m', 'Employee updated Successfully!', '\x1b[37m\n');
        })
        .catch(err => {
            // logs error
            console.log('\n\x1b[31m', '------------------------------------------------!!Invalid Entry!!------------------------------------------------', '\x1b[37m\n')
            console.log(`ERROR: Please try again using the correct values.\n\n(Example: A number should be entered as an integer)\n\nReturning to main menu...\n`);
        });
}  

module.exports = traverse;