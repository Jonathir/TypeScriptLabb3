DROP TABLE IF EXISTS journal;
DROP TABLE IF EXISTS person;

CREATE TABLE journal (
    id SERIAL PRIMARY KEY, 
    person_id INT NOT NULL,
    description TEXT, 
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(id) ON DELETE CASCADE
);

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR (255) NOT NULL
);

INSERT INTO journal (id, person_id, description, created_at) VALUES
(1, 1, 'Routine check-up', '2024-12-18T10:00:00'),
(2, 1, 'Follow-up visit for blood pressure check', '2024-02-15T14:30:00'),
(3, 2, 'Initial medical consultation', '2024-03-05T09:00:00'),
(4, 3, 'Emergency room visit after accident', '2024-12-18T17:45:00'),
(5, 4, 'Routine vaccination', '2024-05-20T08:15:00'),
(6, 5, 'Check-up for recurring headaches', '2024-06-30T11:30:00');


INSERT INTO person (id, name, birthdate, email) VALUES
(1, 'Anna Svensson', '1990-07-22', 'Anna.svensson@example.com'),
(2, 'Jane Smith', '1985-05-12', 'jane.smith@example.com'),
(3, 'Mark Johnson', '1990-07-22', 'mark.johnson@example.com'),
(4, 'Emily Davis', '2000-03-15', 'emily.davis@example.com'),
(5, 'Michael Brown', '1992-11-07', 'michael.brown@example.com');
