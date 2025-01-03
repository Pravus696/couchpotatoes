import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  login,
} from '../../controllers/userContoller';

const router = express.Router();

//import middleware
import { authenticateToken } from '../../servers/auth';

// Route to create a user
router.route('/').post(createUser).put(authenticateToken, updateUser);

// Route to login a user
router.route('/login').post(login);

// Route to get a single user
router.route('/me').get(authenticateToken, getSingleUser);

// Route to get all users
router.get('/', getAllUsers);

// Route to get a user by ID
router.get('/:userId', getUserById);

// Route to update a user by ID
router.put('/:userId', updateUser);

// Route to delete a user by ID
router.delete('/:userId', deleteUser);

export default router;
