INSERT INTO department (id, name)
VALUES (1, "Accounting"),
       (2, "HR"),
       (3, "Sales"),
       (4, "Engineering"),
       (5, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES 
    -- Accounting
       (1, "Sr Accountant", 100000, 1),
       (2, "Accountant", 50000, 1),
       (3, "Jr Accountant", 20000, 1),
    --    HR
       (4, "Lead", 75000, 2),
       (5, "Rep", 25000, 2),
    --    Sales
       (6, "Manager", 100000, 3),
       (7, "Sales Associate", 60000, 3),
    --    Engineer
       (8, "Team Lead", 200000, 4),
       (9, "Sr Engineer", 150000, 4),
       (10, "Engineer", 100000, 4),
       (11, "Jr Engineer", 60000, 4)
    --    legal
       (12, "Attorney", 500000, 5),
       (13, "Paralegal", 30000, 5);      

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
    -- Accounting
       (1, "Jim", "Walmsley", 1, null),
       (2, "Riley", "Mcclure", 2, 1),
       (3, "Mylie", "Keeling", 2, 1),
       (4, "Sophie", "Cano", 3, 1),
    --    HR       
       (5, "Luci", "Clemons", 4, null),
       (6, "Najma", "Pearson", 5, 5),
    --    Sales
       (7, "Yasser", "Cannon", 6, null),
       (8, "Lee", "Fox", 6, null),
       (9, "Jemimah", "Benitez", 7, 7),
       (10, "Natalya", "Sharp", 7, 7),
       (11, "Anabelle", "Stevenson", 7, 8),
    --    Engineer
       (12, "Francesco", "Carr", 8, null),
       (13, "Caiden", "Woods", 9, 12),
       (14, "Isabel", "Betts", 10, 12),
       (15, "Aryan", "Dupont", 10, 12),
       (16, "Saskia", "Melton", 10, 12),
       (17, "Timothy", "Zalewski", 11, 12,),
    --    Legal
       (16, "Nimra", "Woolley", 10, null),
       (17, "Sulayman", "Reilly", 10, null),
       (18, "Haleema", "Vargas", 10, null),
       (20, "Poppy", "Whittle", 10, 16),
       (21, "Jareth", "Barron", 10, 17),
       (22, "Dolores", "Pennington", 10, 18);
       


       
