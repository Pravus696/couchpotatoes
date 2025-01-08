import express from 'express';
import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
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

// Use API routes
app.use('/api', routes);

// Serve static assets only in production
if (true) {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

// Connect to the database and start the server
db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});

console.log('Environment:', process.env.NODE_ENV);