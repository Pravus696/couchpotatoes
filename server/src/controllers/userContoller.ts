import { Request, Response } from 'express';
import { User } from '../models/index.ts';

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

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, bio, profilePicture } = req.body;
  try {
    const user = new User({ username, email, bio, profilePicture });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', details: error });
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
