import express, {Request, Response} from 'express';
import { Pool } from 'pg';
import cors from 'cors';

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'jagh',
    port: 5432,
});

app.use(cors());

app.get('/api/journal', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM journal');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});