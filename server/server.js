import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import db from './config/connection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '')));
// }
// app.use(routes);
// db.once('open', () => {
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// });

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets only in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
} else {
    console.log('Running in development mode. Frontend served by Vite.');
}

// Use API routes
app.use(routes);

// Connect to the database and start the server
db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});

