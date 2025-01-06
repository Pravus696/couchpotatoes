import express from 'express';
import { getAllCouches, createCouch } from '../controllers/couchController';

const router = express.Router();

router.get('/', getAllCouches);
router.post('/', createCouch);

export default router;
