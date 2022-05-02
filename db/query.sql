-- View departments: department names and department ids
SELECT * 
FROM businessmanager_db.department;

-- View roles: role id, job title, the department that role belongs to, and the salary for that role
SELECT role.id, role.title, department.name, role.salary
FROM role
JOIN department ON role.department_id = department.id;

-- View Employees: employee ids, first names, last names, 
-- job titles, departments, salaries, and managers that the employees report to
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary
FROM employee
INNER JOIN role ON employee.role_id = role.id 
INNER JOIN department ON role.department_id = department.id;