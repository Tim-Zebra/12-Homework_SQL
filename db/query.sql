-- View departments: department names and department ids
SELECT * 
FROM businessmanager_db.department;

-- View roles: role id, job title, the department that role belongs to, and the salary for that role
SELECT role.id, role.title, role.salary, department.name
FROM role
JOIN department ON role.department_id = department.id;