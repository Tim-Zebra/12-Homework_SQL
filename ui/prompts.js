// List of prompts accessible

const prompts = {
    mainMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'mainMenu',
            choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add a employee','Update an employee role', 'Quit']
        },
    ],
    deptMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'deptMenu',
            choices: ['Add a department', 'Go back to main menu']
        },
    ],
    roleMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'roleMenu',
            choices: ['Add a role', 'Go back to main menu']   
        },
    ],
    empMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'empMenu',
            choices: ['Add an employee', 'Update an employee role', 'Go back to main menu']
        },
    ],
    addDept: [
        {
            type: 'input',
            message: 'Enter the new department ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter the new department name: ',
            name: 'name',
        },
    ],
    addRole: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'addRole',
            choices: ['Add an employee', 'Update an employee role', 'Go back to main menu']
        },
    ],
    addEmp: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'addEmp',
            choices: ['Add an employee', 'Update an employee role', 'Go back to main menu']
        },
    ],
    updateEmp: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'updateEmp',
            choices: ['Add an employee', 'Update an employee role', 'Go back to main menu']
        },
    ],
}


exports.prompts = prompts;