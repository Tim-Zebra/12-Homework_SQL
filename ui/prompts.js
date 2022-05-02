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
}


exports.prompts = prompts;