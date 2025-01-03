import { Request, Response } from 'express';
import { User } from '../models/index.ts';
import { signToken } from '../services/auth.ts';

// Get a single user
export const getSingleUser = async (req: Request, res: Response): Promise<any> => {
  const foundUser = await User.findOne({
    $or: [{ _id: req.user ? req.user._id : req.params._id }, { username: req.params.username }],
  });

  if (!foundUser) {
    return res.status(400).json({ message: 'User not found' });
  }

  return res.json(foundUser);
};

// Create a user
export const createUser = async (req: Request, res: Response): Promise<any> => {
  const user = await User.create(req.body);

  if (!user) {
    return res.status(400).json({ message: 'User not created' });
  }
  const token = signToken(user.username, user.email, user._id);
  return res.json({ token, user });
};

// Login a user
export const login = async (req: Request, res: Response): Promise<any> => {
  const user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const correctPassword = await user.isCorrectPassword(req.body.password);

  if (!correctPassword) {
    return res.status(400).json({ message: 'Incorrect password' });
  }
  const token = signToken(user.username, user.email, user._id);
  return res.json({ token, user });
};


// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error });
  }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user', details: error });
  }
};

// Update a user by ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const updateData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error });
  }
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', details: error });
  }
};
