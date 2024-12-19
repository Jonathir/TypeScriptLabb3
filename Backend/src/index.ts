import express, {Request, Response} from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors({ origin: '*' }));
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.PGURI,
});

app.get('/journal', async (_req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                journal.id AS journal_id,
                journal.description,
                journal.created_at,
                persons.id AS person_id,
                persons.name AS person_name,
                persons.birthdate AS person_birthdate
            FROM journal
            INNER JOIN persons ON journal.person_id = persons.id`);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/persons', async (_req, res) => {
    try {
        const result = await pool.query('SELECT * FROM persons');
        res.json(result.rows);
    } catch (err) {
        const error = err as Error;
        console.error('Error fetching persons: ', error.message);
        console.error('Stack trace: ', error.stack);
        res.status(500).send('Server error');
    }
});

app.post('/persons', async (_req, res) => {
    const { name, birthdate, email } = _req.body;
    try {
        const result = await pool.query(
            'INSERT INTO persons (name, birthdate, email) VALUES ($1, $2, $3) RETURNING *',
            [name, birthdate, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/journal', async (_req, res) => {
    const { person_id, description } = _req.body;
    try {
        const result = await pool.query(
            'INSERT INTO journal (person_id, description) VALUES ($1, $2) RETURNING *',
            [person_id, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});