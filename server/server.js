import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import db from './config/connection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;
import fs from 'fs';
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});
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

// Use API routes
app.use('/api', routes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets only in production
if (process.env.NODE_ENV === 'production') {
    // Serve static files in production
    const buildPath = path.join(__dirname, '../client/build');

    if (fs.existsSync(buildPath)) {
        app.use(express.static(buildPath));
        app.get('*', (req, res) => {
            res.sendFile(path.join(buildPath, 'index.html'));
        });
    } else {
        console.error('Build folder not found. Run "npm run build" in client.');
        process.exit(1); // Exit if build folder is missing
    }
} else {
    // Development mode (do NOT serve static files)
    console.log('Running in development mode. Frontend served by Vite.');

    // Catch-all for invalid API routes in development
    app.use((req, res, next) => {
        if (req.originalUrl.startsWith('/api/')) {
            res.status(404).json({ error: 'API route not found' });
        } else {
            res.status(404).send('Invalid request');
        }
    });
}

// Connect to the database and start the server
db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});

console.log('Environment:', process.env.NODE_ENV);


