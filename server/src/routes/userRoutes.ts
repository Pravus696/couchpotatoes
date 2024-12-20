import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user';

const router = express.Router();

// Route to get all users
router.get('/', getAllUsers);

// Route to get a user by ID
router.get('/:userId', getUserById);

// Route to create a new user
router.post('/', createUser);

// Route to update a user by ID
router.put('/:userId', updateUser);

// Route to delete a user by ID
router.delete('/:userId', deleteUser);

export default router;
