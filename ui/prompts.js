// Main menu
// list
// Options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const prompts = {
    mainMenu: [
        {
            type: 'list',
            message: 'What would you like to do? ',
            name: 'mainMenu',
            choices: ['View all departments','View all roles','View all Employees','Add a department','Add a role','Add a employee','Update an employee role']
        },
    ]
}

console.log(prompts);
exports.prompts = prompts;