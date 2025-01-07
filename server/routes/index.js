import express from 'express';
const router = express.Router();
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Import the updated image upload API route
import apiRoutes from './api/imageUploadAPI.js';
router.use('/api', apiRoutes);
router.use((_req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
export default router;
