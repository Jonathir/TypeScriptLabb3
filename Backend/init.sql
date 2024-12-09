DROP TABLE IF EXISTS journal;

CREATE TABLE journal (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    description TEXT, 
    birthdate DATE NOT NULL 
);

INSERT INTO journal (name, description, birthdate) VALUES
('Emma', 'Emma blöder ur öronen', '1990-05-20'),
('Bob', 'Patienten har skadat sig', '1985-09-15'),
('Klas', 'Patienten surfar på fritiden men äter grus', '1993-07-10');