// List of prompts accessible

const prompts = {
    mainMenu: [
        {
            type: 'list',
            message: 'What would you like to do? ',
            name: 'mainMenu',
            choices: ['View all departments','View all roles','View all Employees','Add a department','Add a role','Add a employee','Update an employee role', 'Quit']
        },
    ],

}


exports.prompts = prompts;