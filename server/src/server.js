import express from 'express';
import path from 'node:path';
import routes from './routes/index.js';
import db from './config/connection.js';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '')));
}
app.use(routes);
db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
