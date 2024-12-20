import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './config/database';
import couchRoutes from './routes/couchRoutes';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app: Application = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/couches', couchRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Database connection
connectToDatabase();

export default app;
