-- View departments: department names and department ids
SELECT * 
FROM businessmanager_db.department;

-- View roles: role id, job title, the department that role belongs to, and the salary for that role
SELECT role.id, role.title, department.name, role.salary
FROM role
JOIN department ON role.department_id = department.id;

-- View Employees: employee ids, first names, last names, 
-- job titles, departments, salaries, and managers that the employees report to
SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, m.first_name AS manager
FROM employee e
INNER JOIN role ON e.role_id = role.id 
INNER JOIN department ON role.department_id = department.id
LEFT JOIN employee m ON m.id = e.manager_id;

-- Add department: id, name
INSERT INTO department
VALUES (?,?);

-- Add role: id, title, salary, debtId
INSERT INTO role
VALUES (?,?,?,?);

-- Add employee: id, first_name, last_name, role_id, manager_id
INSERT INTO employee
VALUES (?,?,?,?,?);

-- Get employee names as a full name from db
SELECT CONCAT(first_name,' ',last_name) AS full_name
FROM employee;
