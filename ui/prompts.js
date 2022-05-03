// List of prompts accessible
const prompts = {
    mainMenu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'mainMenu',
            choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role', 'Quit']
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
            type: 'input',
            message: 'Enter the new role ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter the new role title: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the new role salary: ',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter the id of the associated department: ',
            name: 'deptId',
        },
    ],
    addEmp: [
        {
            type: 'input',
            message: 'Enter the new employee ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter the employee\'s first name: ',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'Enter the employee\'s last name: ',
            name: 'last_name',
        },
        {
            type: 'input',
            message: 'Enter the id of the associated role: ',
            name: 'role_id',
        },
        {
            type: 'input',
            message: 'Enter the id of the associated manager: ',
            name: 'manager_id',
        },
    ],
    updateEmp: [
        {
            type: 'list',
            message: 'Select the employee you would like to update:',
            name: 'updateEmp',
            choices: []
        },
        {
            type: 'list',
            message: 'Which would you like to update?',
            name: 'updateOptions',
            choices: ['first_name', 'last_name', 'role', 'manager_id', 'Cancel']
        },
        {
            type: 'input',
            message: 'Please enter the updated value?',
            name: 'updateValue'
        },
    ],
}

exports.prompts = prompts;